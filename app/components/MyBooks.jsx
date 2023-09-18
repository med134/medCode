"use client";
import Image from "next/image";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState, useEffect } from "react";

const MyBooks = () => {
  const [book, setBooks] = useState();
  const fetchBooks = async () => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=programming_algorithms`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    setBooks(data.items);
    console.log(data.items);
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <>
      {book?.map((item) => (
        <article
          key={item.id}
          className="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg dark:bg-light dark:border-light"
        >
          <Link href={item.volumeInfo.previewLink} target="_blank">
            <Image
              src={item.volumeInfo.imageLinks.thumbnail}
              className="h-56 w-full object-contain overflow-hidden p-2 rounded-lg"
              alt="books image"
              priority
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            <div className="flex-auto px-6 py-5">
              <span className="mb-2 flex items-center text-sm font-semibold">
                {item.volumeInfo.authors}
              </span>
              <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-xl lg:text-sm md:text-sm md:font-lexendj text-borderColor">
                {item.volumeInfo.title}
              </h3>
              <p className="mb-4 font-light text-sm dark:text-dark">
                {item.volumeInfo.subtitle}
              </p>
              <Link
                href={item.volumeInfo.previewLink}
                target="_blank"
                className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm"
              >
                read now
              </Link>
            </div>
          </Link>
        </article>
      ))}
    </>
  );
};

export default MyBooks;
