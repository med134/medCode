import React from "react";
import Image from "next/image";
import SidBar from "@/app/components/SidBar";
import "react-quill/dist/quill.snow.css";


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

  return {
    title: post.title,
    description: post.shortDescription,
    alternates: {
      canonical: `https://www.medcode.dev/blogs/${params.id}`,
      languages: {
        "en-us": `https://www.medcode.dev/en-us/blogs${params.id}`,
      },
      types: {
        "application/rss+xml": "https://www.medcode.dev/rss",
      },
    },
    openGraph: {
      title: post.title,
      description: post.shortDescription,
      images: [
        {
          url: post.image,
          width: "400",
          height: "300",
        },
      ],
    },
  };
}
const BlogPage = async ({ params }) => {
  const { id } = params;
  const blog = await getData(id);
  const content = blog.content;

  return (

      <section className="containerBlog p-16 mx-auto mt-2 lg:block  ">
        <div className="flex flex-wrap justify-around">
          <div className="w-full px-4 mb-8">
            <Image
              src={blog.image}
              alt="Featured Image"
              className="w-full object-cover rounded"
              width={500}
              height={500}
            />
            <h2 className="text-4xl font-bold mt-2 py-1 sm:text-xl">{blog.title}</h2>
            <span className="flex underline font-bold justify-start items-start py-6 ml-2 mt-1 font-bolder">
              {blog.tags}
            </span>
            <div className="ql-snow">
              <div
                className="ql-editor"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
          </div>
        </div>
        <div className="lg:grid grid-cols-2 gap-6 lg:p-14 md:block sm:p-2">
          <div className="sm:w-full">
            <span className="text-xl text-gray-800 font-semibold mt-7 sm:w-full sm:text-sm">
              More titles From{" "}
              <span className="text-2xl text-red-500 sm:text-xl">MedCode...</span>{" "}
            </span>
            <SidBar />
          </div>
        </div>
      </section>
  );
};
export default BlogPage;
