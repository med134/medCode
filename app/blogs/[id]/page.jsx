import React from "react";
import Image from "next/image";
import Layout from "@/app/components/Layout";
import Category from "@/app/components/Category";
import SidBar from "@/app/components/SidBar";
import parse from "html-react-parser";

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
  const blog1 = blog.content;

  return (
    <Layout className="p-8 by-1 xl:p-4 lg:p-4 md:p-2 sm:p-8">
      <main className="containerBlog mx-auto mt-2 lg:block ">
        <div className="flex flex-wrap justify-around">
          <div className="w-full px-4 mb-8">
            <div>
              <Image
                src={blog.image}
                alt="Featured Image"
                className="w-full object-cover rounded"
                width={500}
                height={500}
              />
              <h2 className="text-4xl font-bold mt-2 py-1">{blog.title}</h2>
              <span className="flex justify-start items-start py-6 ml-2 mt-1 font-bolder">
                {blog.tags}
              </span>
            </div>

            <div className="p-6 py-2 font-normal" {...blog1}></div>
          </div>
        </div>
        <div className="lg:grid grid-cols-2 gap-6 lg:p-14 md:block">
          <Category />
          <div>
            <span className="text-xl text-gray-800 font-semibold mt-7">
              More titles From{" "}
              <span className="text-2xl text-red-500">MedCode...</span>{" "}
            </span>
            <SidBar />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default BlogPage;
