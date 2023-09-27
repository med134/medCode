import React from "react";
import { getArticles } from "./FetchData";
import Link from "next/link";

const SidBar = async () => {
  const dev = await getArticles();
  return (
    <>
      {dev?.map((item, index) =>
        index < 4 ? (
          <div key={item._id} className="mt-6 bg-white shadow-md p-5 px-6">
            <h3 className="text-xl font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="mt-1 text-sm mb-2 text-gray-500">
              {item.shortDescription.slice(0,50)}...
              <p className="mt-1 text-sm underline text-gray-900 font-semibold">
                {item.tags}
              </p>
            </p>
            <Link
              href={`/blogs/${item._id}`}
              target="_blank"
              className="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 hover:underline active:text-rose-700"
            >
              Read more...
            </Link>
          </div>
        ) : null
      )}
    </>
  );
};

export default SidBar;
