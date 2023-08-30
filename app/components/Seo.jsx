"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Seo = () => {
  const [HackerArt, setHackerArt] = useState([]);
  useEffect(() => {
    const fetchSeoData = async () => {
      const res = await fetch(
        `https://hn.algolia.com/api/v1/search?query=programming_languages`,
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
          <div
            key={ask.author}
            className="relative bg-gradient-to-r from-purple-400 to-blue-500 p-8 rounded-lg"
          >
            <Link
              href={ask.url}
              target="_blank"
              className="text-3xl font-serif font-semibold text-light hover:underline"
            >
              {ask.title}
            </Link>
          </div>
        ) : null
      )}
    </>
  );
};

export default Seo;
