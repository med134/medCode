"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { getData } from "./FetchData";
import Layout from "./Layout";

const Blogs = async () => {
  const data = await getData();
  return (
    <>
 
      <h1 className="text-3xl font-lexend text-center mt-10 font-bold underline px-12 dark:text-light">
        Recent Articles :
      </h1>
      <section className="w-full p-16  py-10 grid grid-cols-4 gap-16 xl:grid-cols-3 xl:gap-10 lg:grid-cols-2 md:flex md:flex-wrap md:justify-center md:p-4 md:py-8 xs:p-2 dark:bg-dark">
        {data.map((item, index) =>
          index <= 7 ? (
            <article
              key={item.id}
              className="w-72 lg:w-64 h-auto overflow-hidden rounded-lg border-2 border-orange-400 border-opacity-60 shadow-lg sm:w-96 xs:w-80 dark:text-light"
            >
              <img
                className="w-92 h-auto transform object-contain transition duration-500 ease-in-out group-hover:scale-105 md:h-36"
                src={item.cover_image}
                alt="blog"
              />
              <h2 className="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">
                Article
              </h2>
              <div className="py-1 px-6">
                <Link
                  href={item.url}
                  target="_blank"
                  className="title-font mb-3 inline-block cursor-pointer text-xl hover:underline font-extrabold tracking-wide text-gray-800 dark:text-light"
                >
                  {item.title}
                </Link>
                <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between px-6 pt-1 pb-4 lg:text-xs">
                <div className="inline-flex text-sm lg:text-xs text-gray-500">
                  <span className="mr-1">
                    {item.published_timestamp.slice(0, 10)}
                  </span>
                  <span className="ml-6 lg:ml-1">
                    {item.published_timestamp.slice(8, 10)} min read
                  </span>
                </div>

                <div className="mt-1">
                  <span className="mr-3 ml-auto inline-flex items-center py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ) : null
        )}
      </section>
    </>
  );
};

export default Blogs;
