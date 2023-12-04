"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loading from "./BlogLoading";
import { FaRegCalendarAlt } from "react-icons/fa";

const Card = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    FaRegCalendarAlt;
    const getPosts = async () => {
      try {
        const response = await fetch(`https://www.medcode.dev/api/articles`);
        const data = await response.json();

        // Sort the posts by date in descending order (newest first)
        const sortedPosts = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setPosts(sortedPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  const FormatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        posts?.map((item, index) =>
          index < 4 ? (
            <section
              key={item._id}
              className="p-2 w-full mb-3 flex justify-evenly px-8 bg-white items-start border border-gray-500 rounded-xl dark:bg-dark dark:border-light lg:flex-wrap-reverse lg:justify-start lg:items-start lg:px-3"
            >
              <div className="text-start w-1/2 lg:w-full">
                <span className="flex justify-start items-center py-2 dark:text-light">
                  <FaRegCalendarAlt className="w-5 h-5 text-gray-800 dark:text-light" />
                  <span className="ml-2 font-semibold dark:text-light">
                    {FormatDate(item?.createdAt.slice(0, 10))}
                  </span>
                </span>
                <Link href={`/blogs/${item._id}`}>
                  <span
                    className="bg-gradient-to-r text-2xl font-semibold from-red-300 to-red-600 bg-[length:0px_10px] bg-left-bottom
      bg-no-repeat
      transition-[background-size]
      duration-500
      hover:bg-[length:100%_3px]
      group-hover:bg-[length:100%_10px]
      dark:from-red-800 dark:to-purple-900 dark:text-light"
                  >
                    {item.title}
                  </span>
                </Link>
                <p className="text-sm text-gray-700 py-3 dark:text-light">
                  {item.description}
                </p>
                <div className="flex items-center justify-start py-3">
                  <Image
                    src="https://i.ibb.co/mSjZwpw/download.png"
                    alt="userImage"
                    className="w-8 h-8 rounded-full"
                    width={300}
                    height={300}
                  />
                  <p className="text-sm text-gray-500 ml-2 dark:text-light">
                    MOHAMMED DAKIR
                  </p>
                </div>
                <div>
                  <Link href="/" className="flex justify-start items-center">
                    <span className="bg-light p-1 uppercase ml-2 px-1 text-gray-800 rounded-md font-semibold hover:bg-slate-800 hover:text-white transition-transform duration-75 ease-out">
                      {item.category}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="">
                <Image
                  src={item?.image}
                  alt="blog image"
                  width={400}
                  height={400}
                  className="object-cover rounded-xl w-96 h-52 border border-gray-500 lg:w-[460px]"
                />
              </div>
            </section>
          ) : null
        )
      )}
      <Link href="/category/all" className="flex justify-center items-center">
        <span className="text-center text-xl sm:text-sm text-gray-700 dark:text-light hover:bg-blue-950 rounded-md hover:text-light border border-gray-600 px-20 py-1 w-full dark:border-light">
          show moore...
        </span>
      </Link>
    </>
  );
};

export default Card;
