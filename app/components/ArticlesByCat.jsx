"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ArticlesByCat = ({ posts }) => {
  const [sortedPosts, setSortedPosts] = useState([]);
  useEffect(() => {
    const sorted = posts.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setSortedPosts(sorted);
  }, [posts]);
  return (
    <div className="grid justify-center grid-cols-3 gap-6 mt-8 md:block">
      {sortedPosts?.map((item) => (
        <div
          key={item._id}
          className="bg-white shadow-lg dark:shadow-white rounded-md lg:block md:mb-6 lg:w-full sm:w-full dark:bg-dark dark:border-light"
        >
          <Link
            href={`https://www.medcode.dev/blogs/${item._id}`}
            className="hover:no-underline focus:no-underline dark:bg-gray-900"
          >
            <Image
              width={300}
              height={300}
              className="object-cover w-full rounded h-44 dark:bg-gray-500 md:object-fill"
              src={item.image}
              alt="blog_image"
            />
            <div className="p-6 space-y-2">
              <span className="text-red-600 font-bold tex-sm">
                #{item.category}
              </span>
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline lg:text-xl dark:text-light">
                {item.title}
              </h3>
              <span className="text-xs dark:text-gray-400">
                {item?.createdAt.slice(0, 10)}
              </span>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArticlesByCat;
