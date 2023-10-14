"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ articles }) => {
  const [posts, setPosts] = useState(articles);
  const [selected, setSelected] = useState("");

  const filterPosts = (cat) => {
    const result = posts.filter((index) => {
      return index.category === cat;
    });
    setPosts(result);
  };
  const HandelChange = (e) => {
    const cat = e.target.value;
    setSelected(cat);
    console.log(cat);
    filterPosts(cat);
  };
  return (
    <>
      <div>
        <h1 className="text-2xl px-12 py-8 font-bold text-gray-800">
          Categories
        </h1>
        <select
          className="w-full px-8 p-2"
          value={selected}
          onChange={HandelChange}
        >
          <option value="">selected...</option>
          <option value="react">react</option>
          <option value="productivity">productivity</option>
        </select>
      </div>
      {posts.map((item) => (
        <div
          key={item._id}
          className="flex items-center justify-evenly mb-6 mt-4 bg-white shadow-lg p-6 rounded-md lg:block lg:w-full sm:w-full"
        >
          <Link
            href={`/blogs/${item._id}`}
            target="_blank"
            className="group relative items-center block shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg"
          >
            <Image
              src={item.image}
              loading="lazy"
              p
              alt="blog_image"
              className="object-cover transition items-center duration-200 group-hover:scale-110"
              width={300}
              height={500}
            />
          </Link>
          <div className="flex flex-col gap-2 px-4 lg:mt-4">
            <span className="text-sm text-gray-400">
              {item?.createdAt.slice(0, 10)}
            </span>
            <h2 className="text-xl font-bold text-gray-800">
              <Link
                href={`/blogs/${item._id}`}
                className="transition duration-100 hover:text-rose-500 active:text-rose-600 sm:text-sm"
              >
                {item.title}
              </Link>
            </h2>
            <p className="text-gray-500 sm:text-xs">
              {item?.description.slice(0, 50)}...
            </p>
            <div>
              <Link
                href={`/blogs/${item._id}`}
                className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 hover:underline active:text-rose-700 sm:text-xs"
              >
                Read more...
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Card;
