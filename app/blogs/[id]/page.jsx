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
  const publicAt = new Date(post.createdAt).toISOString();

  return {
    
    title: post.title,
    description: post.shortDescription,
    keywords: post.tags,
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
    <section className="containerBlog p-16 mx-auto mt-2 lg:block sm:p-2 dark:bg-dark">
      <div className="flex flex-wrap justify-around">
        <div className="w-full px-4 mb-1 sm:text-sm sm:mb-2 dark:text-light">
          <Image
            src={blog.image}
            alt="Featured Image"
            className="w-full object-cover rounded"
            width={500}
            height={500}
          />
          <h2 className="text-4xl font-bold mt-2 py-1 sm:text-xl">
            {blog.title}
          </h2>
          <p className="text-sm font-semibold text-red-400">@{blog.username}</p>
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
        <SidBar />
      </div>
    </section>
  );
};
export default BlogPage;
