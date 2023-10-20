"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Card = ({ data }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });
  const childVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
    duration: 1.5,
    delay:1,
  };
  const parentVariants = {
    visible: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 2,
        duration:2,
      },
    },
  };
  return (
    <>
      {data
        ?.slice()
        .reverse()
        .map(
          (item, index) =>
            index > 0 && (
              <motion.div
                initial="hidden"
                animate={inView ? "visible":"hidden"}
                variants={parentVariants}
                key={item._id}
              >
                <motion.div variants={childVariants}>
                  <div ref={ref} className="flex items-center justify-evenly mb-6 mt-0 bg-white shadow-lg dark:shadow-white p-6 rounded-md lg:block lg:w-full sm:w-full dark:bg-dark dark:border-light">
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
                    <div className="flex flex-col gap-2 px-4 lg:mt-4 dark:text-light">
                      <span className="text-sm text-gray-400">
                        {item?.createdAt.slice(0, 10)}
                      </span>
                      <h2 className="text-xl font-bold text-gray-800">
                        <Link
                          href={`/blogs/${item._id}`}
                          className="transition duration-100 hover:text-rose-500 active:text-rose-600 sm:text-sm dark:text-light"
                        >
                          {item.title}
                        </Link>
                      </h2>
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
        )}
    </>
  );
};
export default Card;
