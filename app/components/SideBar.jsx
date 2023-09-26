"use client";
import React from "react";
import { getData } from "./FetchData";
import Link from "next/link";

const SideBar = async () => {
  const dev = await getData();

  return (
    <>
      {dev.map((item, index) =>
        index < 3 ? (
          <div
            key={item.id}
            className="mt-3 bg-white shadow-md p-3 border border-b-red-500"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="mt-1 text-sm mb-2 text-gray-500">
              {item.description}
            </p>

            <p className="mt-1 text-sm ml-2 mb-2 underline text-gray-900 font-semibold">
              #{item.tags}
            </p>

            <Link
              href={item.url}
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

export default SideBar;
