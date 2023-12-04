"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useSWR from "swr";
import BlogLoading from "./BlogLoading";

const SideBar = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    `https://dev.to/api/articles?username=med_code`,
    fetcher
  );
  const childVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };
  const parentVariants = {
    visible: {
      transition: {
        when: "beforeChildren", // Stagger children animation before parent
        staggerChildren: 0.5,
        delay: 2, // Delay between each child
      },
    },
  };
  return (
    <section ref={ref}>
      {isLoading ? (
        <BlogLoading />
      ) : (
        data?.map((item, index) =>
          index < 5 ? (
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={parentVariants}
              key={item.id}
            >
              <motion.div
                variants={childVariants}
                transition={{ delay: index * 1 }}
              >
                <div className="mt-3 bg-white dark:bg-dark shadow-md p-3 border border-b-gray-500 dark:border-b-light">
                  <p className="text-xl font-semibold text-gray-800 dark:text-light">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm mb-2 text-gray-500 dark:text-light">
                    {item.description}
                  </p>

                  <p className="mt-1 text-sm ml-2 mb-2 underline text-gray-900 font-semibold dark:text-light">
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
              </motion.div>
            </motion.div>
          ) : null
        )
      )}
    </section>
  );
};

export default SideBar;
