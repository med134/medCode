"use client";
import React, { useState, useEffect } from "react";
import Loading from "@/app/loading";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const AddNewArticle = () => {
  const route = useRouter();
  const [text, setText] = useState();
  const { quill, quillRef } = useQuill();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (quill) {
      const htmlContent = quill.root.innerHTML;
      setText(htmlContent);
    }
    const title = e.target[0].value;
    const tags = e.target[1].value;
    const image = e.target[2].value;
    const category = e.target[3].value;
    const description = e.target[4].value;
    const content = text;
    try {
      await fetch("/api/articles", {
        method: "POST",
        body: JSON.stringify({
          title,
          tags,
          image,
          category,
          description,
          content,
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
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    `/api/articles?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <Loading />;
  }

  if (session.status === "unauthenticated") {
    route?.push("/dashboard/login");
  }

  return (
    <div className="inline-block p-8 py-8 sm:p-2 sm:py-2">
      <div className="p-8 block justify-between items-center md:inline-block sm:items-center">
        <form className="p-4 text-left text-gray-700" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring sm:px-2"
          />
          <input
            type="text"
            placeholder="tags"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <input
            type="text"
            placeholder="Image"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <input
            type="text"
            placeholder="category"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <input
            type="text"
            placeholder="description"
            className="h-12 w-full max-w-full rounded-md border m-4 bg-white px-5 text-sm outline-none focus:ring"
          />
          <div className="py-16 items-center text-center">
            <div ref={quillRef} style={{ height: "400px" }} />
          </div>
          <button className="rounded-md font-semibold py-2 w-full bg-violet-600 text-light ml-4 mt-8 hover:bg-purple-400">
            Post Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewArticle;
