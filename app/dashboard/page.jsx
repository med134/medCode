/* eslint-disable @next/next/no-img-element */
"use client";
import { useSession } from "next-auth/react";
import React from "react";
import useSWR from "swr";
import Loading from "../loading";
import { useRouter } from "next/navigation";
export const metadata = {
  robots: {
    index: false,
    nocache: true,
  },
};
const Dashboard = () => {
  const handleDelete = async (id) => {
    try {
      await fetch(`https://www.medcode.dev/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    const image = e.target[2].value;
    const link = e.target[3].value;
    const category = e.target[4].value;
    const code = e.target[5].value;

    try {
      await fetch("https://www.medcode.dev/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
          image,
          link,
          category,
          code,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };
  const session = useSession();
  const route = useRouter();
  console.log(session);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    `https://www.medcode.dev/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );
  console.log(data);
  console.log("userName", session?.data?.user.name);
  if (session.status === "loading") {
    return <Loading />;
  }
  if (session.status === "unauthenticated") {
    route?.push("/dashboard/login");
  }
  if (session.status === "authenticated") {
    return (
      <div className="p-16 flex justify-between lg:inline-block lg:justify-center lg:items-center sm:p-8">
        <form className="p-4 text-left text-gray-700" onSubmit={handleSubmit}>
          <h1 className="text-xl font-lexend text-gray-700 px-5">
            Add New Post
          </h1>
          <input
            type="text"
            placeholder="Title"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring sm:px-2"
          />
          <input
            type="text"
            placeholder="Desc"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <input
            type="text"
            value={session?.data?.user.name}
            defaultValue={session?.data?.user.name}
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <input
            type="text"
            placeholder="Image"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <input
            type="text"
            placeholder="Link"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <input
            type="text"
            placeholder="category"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <textarea
            placeholder="put your code here"
            className="h-44 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <button className="rounded-md font-semibold py-2 w-full bg-violet-600 text-light ml-4 hover:bg-purple-400">
            Post Now
          </button>
        </form>
        <div className="w-full p-6 rounded-lg">
          {isLoading ? (
            <Loading />
          ) : (
            data?.map((post) => (
              <div key={post._id}>
                <div className="">
                  <img
                    className="rounded-md"
                    src={post.image}
                    alt="image_post"
                    width={350}
                    height={80}
                  />
                </div>
                <div className="inline-flex justify-between">
                  <h2 className="text-xl p-3 px-2 sm:text-sm font-lexend py-3">
                    {post.title}
                  </h2>
                  <span
                    onClick={() => handleDelete(post._id)}
                    className="p-1 bg-red-400 text-light m-3 font-semibold rounded-md cursor-pointer hover:bg-red-500 bottom-1"
                  >
                    delete
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
};

export default Dashboard;
