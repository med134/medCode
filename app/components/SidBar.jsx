import React from "react";
import { getArticles } from "./FetchData";
import Link from "next/link";
import Crypto from "./Crytpo";

const SidBar = async () => {
  const dev = await getArticles();
  return (
    <>
      <Crypto />
      <span className="text-xl text-gray-800 font-semibold mt-7 sm:w-full sm:mb-4 sm:text-xl sm:mt-1 dark:text-light">
        More titles From{" "}
        <span className="text-2xl text-red-500 sm:text-xl">MedCode...</span>{" "}
      </span>
      {dev?.map((item) => (
        <div
          key={item._id}
          className="mt-6 bg-white shadow-md p-5 px-6 sm:mt-1 sm:px-3 sm:mb-3 sm:p-4 border border-b-red-500 dark:bg-dark "
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-light">
            {item.title}
          </h3>
          <p className="mt-1 text-sm mb-2 text-gray-500">
            {/* {item.shortDescription.slice(0, 50)}... */}
            <p className="mt-1 text-sm underline text-gray-900 font-semibold dark:text-light">
              {item.tags}
            </p>
          </p>
          <Link
            href={`/blogs/${item._id}`}
            className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 hover:underline active:text-rose-700"
          >
            Read more...
          </Link>
        </div>
      ))}
      
    </>
  );
};

export default SidBar;
