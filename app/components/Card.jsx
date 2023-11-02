"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Loading from "../loading";
import useSWR from "swr";
import { useInView } from "react-intersection-observer";

const Card = () => {
  const [loading, setLoading] = useState(false);
  const [sortedPosts, setSortedPosts] = useState([]);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });
  const loadMore = () => {
    setVisibleCount(visibleCount + 3); // Increase the number of visible posts
  };
  const childVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };
  const parentVariants = {
    visible: {
      transition: {
        when: "beforeChildren", // Stagger children animation before parent
        staggerChildren: 0.5,
        delay: 0, // Delay between each child
      },
    },
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://www.medcode.dev/api/articles")
      .then((response) => response.json())
      .then((data) => {
        // Sort posts by the createdAt date in descending order
        const sorted = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setSortedPosts(sorted);
        setLoading(false);
      });
  }, []);

  return (
    <section ref={ref} className="mt-4">
      {loading ? (
        <Loading />
      ) : (
        sortedPosts?.map(
          (item, index) =>
            index < 5 && (
              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={parentVariants}
                key={item._id}
              >
                <motion.div
                  variants={childVariants}
                  transition={{ delay: index * 1 }}
                >
                  <div className="flex items-center justify-evenly mb-6 mt-0 bg-white shadow-lg dark:shadow-white p-6 rounded-md lg:block lg:w-full sm:w-full dark:bg-dark dark:border-light">
                    <Link
                      href={`/blogs/${item._id}`}
                      target="_blank"
                      className="group relative items-center block shrink-0 overflow-hidden rounded-lg bg-gray-100 shadow-lg"
                    >
                      <Image
                        src={item.image}
                        loading="lazy"
                        alt="blog_image"
                        className="object-cover transition items-center duration-200 group-hover:scale-110 md:object-fill"
                        width={300}
                        height={500}
                      />
                    </Link>
                    <div className="flex flex-col gap-2 px-4 lg:mt-4 dark:text-light">
                      <span className="text-sm text-gray-400">
                        {item?.createdAt.slice(0, 10)}
                      </span>

                      <Link
                        href={`/blogs/${item._id}`}
                        className="transition text-xl font-bold text-gray-800 duration-100 hover:text-rose-500 active:text-rose-600 sm:text-sm dark:text-light"
                      >
                        {item.title}
                      </Link>
                      <p className="text-gray-500 sm:text-xs dark:text-light">
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
                </motion.div>
              </motion.div>
            )
        )
      )}

      <Link
        className="text-red-600 font-semibold hover:underline"
        href={`https://www.medcode.dev/category/all`}
      >
        Show All Posts...
      </Link>
    </section>
  );
};
export default Card;
