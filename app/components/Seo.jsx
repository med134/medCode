"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineVerticalLeft } from "react-icons/ai";

const Seo = () => {
  const [HackerArt, setHackerArt] = useState([]);
  useEffect(() => {
    const fetchSeoData = async () => {
      const res = await fetch(
        `https://hn.algolia.com/api/v1/search?query=computer_science`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) {
        setError(true);
      }
      const data = await res.json();
      setHackerArt(data.hits);
    };
    fetchSeoData();
  }, []);

  return (
    <>
      {HackerArt.map((ask, index) =>
        index < 1 ? (
          <article
            key={ask.author}
            className="relative select-none bg-purple-50 px-8 pt-8 pb-10 text-blue-900 shadow-md"
          >
            <h1 className="text-sm font-bold uppercase mb-4">{ask.author}</h1>
            <h1 className="text-2xl font-semibold text-gray-800 xs:text-xl">{ask.title} From Here...</h1>
            <Link
              href={ask.url}
              target="_blank"
              className="absolute bottom-0 right-0 flex h-12 w-12 items-center justify-center bg-borderColor text-white transition-all hover:w-16"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </article>
        ) : null
      )}
    </>
  );
};

export default Seo;
