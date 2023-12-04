/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import Loading from "@/app/loading";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const session = useSession();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, isLoading } = useSWR(
    `/api/comments?blogId=${postSlug}`,
    fetcher
  );
  const [comment, setComment] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        blogId: postSlug,
        username: session?.data?.user?.name,
        imageUser: session?.data?.user?.image,
        comment,
      }),
    });
    mutate();
    e.target.reset();
  };
  const MyLoader = ({ src }) => {
    const session = useSession();
    return `${session?.data?.user.image}`;
  };

  return (
    <div className="w-full bg-white rounded-lg border p-2 dark:bg-dark">
      <h3 className="font-bold text-xl py-2 dark:text-light">Comments</h3>
      {status === "authenticated" ? (
        <form
          className={`${styles.write} dark:bg-dark dark:text-light`}
          onSubmit={handleSubmit}
        >
          <Image
            loader={MyLoader}
            src={
              session?.data?.user?.image
                ? session.data.user.image
                : `https://i.ibb.co/p1dMcP9/man.png`
            }
            alt=""
            width={50}
            height={50}
            className={styles.image}
          />
          <input
            placeholder="write a comment..."
            required
            className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 sm:h-12 py-2 px-4 sm:px-1 font-medium placeholder-gray-700 focus:outline-none focus:bg-white dark:bg-dark dark:text-light"
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="text-xl sm:text-sm bg-red-500 text-light px-4 py-4 rounded-lg font-semibold p-4">
            Post
          </button>
        </form>
      ) : (
        <Link
          href="/dashboard/login"
          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Login to write a comment
        </Link>
      )}
      <div className={styles.comments}>
        {isLoading ? (
          <Loading />
        ) : (
          data?.map((item) => (
            <div
              className="border rounded-md p-3 ml-3 my-3 bg-gray-100 dark:bg-dark dark:text-light"
              key={item._id}
            >
              <div className={styles.user}>
                <div className="flex justify-center items-center">
                  <img
                    src={item?.imageUser}
                    alt=""
                    width={50}
                    height={50}
                    priority
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="block ml-2">
                    <span className="text-sm font-semibold block text-gray-700 dark:text-light">
                      {item?.username}
                    </span>
                    <span className="text-xs text-gray-700 dark:text-light">
                      {item.createdAt.slice(0, 10)}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-medium px-3 text-gray-800 rounded-lg dark:text-light font-poppins sm:text-sm">
                {item?.comment}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
