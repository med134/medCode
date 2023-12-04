/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import SidBar from "@/app/components/SidBar";
import "highlight.js/styles/a11y-dark.min.css";
import "react-quill/dist/quill.snow.css";
import Comments from "@/app/components/comments/comments";

async function getData(id) {
  const res = await fetch(`https://www.medcode.dev/api/articles/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  const publicAt = new Date(post?.createdAt).toISOString();
  return {
    title: post?.title,
    description: post?.description,
    keywords: post?.tags,
    publishedTime: publicAt,
    alternates: {
      canonical: `https://www.medcode.dev/blogs/${params.id}`,
      languages: {
        "en-Us": `https://www.medcode.dev/en-us/blogs${params.id}`,
      },
      types: {
        "application/rss+xml": "https://www.medcode.dev/rss",
      },
    },
    local: "en_Us",
    type: "article",
    openGraph: {
      title: post?.title,
      description: post?.description,
      images: [
        {
          url: post?.image,
          width: "400",
          height: "300",
        },
      ],
      alternates: {
        canonical: `https://www.medcode.dev/blogs/${params.id}`,
        languages: {
          "en-Us": `https://www.medcode.dev/en-us/blogs${params.id}`,
        },
        types: {
          "application/rss+xml": "https://www.medcode.dev/rss",
        },
      },
    },
  };
}
const BlogPage = async ({ params }) => {
  const { id } = params;
  const blog = await getData(id);
  const content = blog.content;

  const FormatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  return (
    <section className="containerBlog  gap-6 p-16 mx-auto mt-2 lg:block sm:p-2 dark:bg-dark">
      <div className="flex flex-wrap justify-around">
        <div className="w-full px-4 mb-1 sm:text-sm sm:mb-2 dark:text-light">
          <div className="flex justify-start items-center">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="ml-2 font-semibold">
              {FormatDate(blog?.createdAt.slice(0, 10))}
            </span>
          </div>
          <h2 className="text-4xl font-bold py-2 sm:text-xl">{blog.title}</h2>
          <span className="text-xl text-gray-600 py-3">{blog.description}</span>
          <Image
            src={blog.image}
            alt="Featured Image"
            className="w-full object-cover rounded mt-2"
            width={500}
            height={500}
          />
          <span className="flex underline font-bold justify-start items-start py-6 ml-2 mt-1 font-bolder">
            {blog.tags}
          </span>
          <div className="ql-snow">
            <div
              className="ql-editor"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
          <Comments postSlug={id} />
        </div>
      </div>
      <div className="sm:w-full sm:p-6">
        <div className="flex items-center w-full max-w-sm mx-auto gap-4 mt-24 sm:mt-4 border-2 p-3 border-red-500 rounded-md">
          <Image
            alt="author image"
            width={300}
            height={300}
            src="https://i.ibb.co/WVDZRxF/bussiness-man.png"
            className="w-24 h-24  object-cover rounded-full"
          />
          <div className="w-fit transition-all transform duration-500">
            <span className="text-sm text-gray-700">Author</span>
            <h1 className="text-gray-600 dark:text-gray-200 font-bold">
              {blog?.username}
            </h1>
            <span className="text-gray-500 text-sm">
              {(blog.jobs = !null ? blog.jobs : "unknown")}
            </span>
            <a
              href={`mailto:${blog?.email}`}
              className="text-xs text-gray-500 dark:text-light"
            >
              {(blog.email = !null ? blog.email : "unknown")}
            </a>
          </div>
        </div>
        <SidBar />
      </div>
    </section>
  );
};
export default BlogPage;
