"use client";
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import useSWR from "swr";

const FreeTemplates = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });
  const childVariants = {
    hidden: { opacity: 0, translateX: -50, translateY: -50 },
    visible: { opacity: 1, translateX: 0, translateY: 0 },
  };
  const parentVariants = {
    visible: {
      transition: {
        when: "beforeChildren", // Stagger children animation before parent
        staggerChildren: 0.5,
        delay: 0.2, // Delay between each child
      },
    },
  };
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    `https://www.medcode.dev/api/posts`,
    fetcher
  );
  console.log("templates", data);
  return (
    <section
      ref={ref}
      className="mx-auto max-w-screen-xl py-8 text-blue-900 sm:py-16 lg:py-20"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold text-red-500">MEDCODE</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-800 sm:text-2xl xl:text-5xl xs:text-xl dark:text-light">
            Make It Easy: Free Templates & Components
          </h2>
        </div>
        <article className="grid grid-cols-3 gap-6 p-16 xl:gap-4 xl:p-8 lg:grid-cols-2 lg:gap-6 lg:p-10 sm:flex flex-wrap sm:p-2 dark:bg-dark">
          {data?.map(
            (item, index) =>
              index > 5 && (
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
                    <div className="bg-white p-6 shadow-lg rounded-lg dark:bg-dark dark:shadow-white">
                      <Link
                        href={`/templates/${item._id}`}
                        className="text-xl py-2 font-bold text-gray-800 dark:text-light"
                      >
                        {item.title}
                        <Image
                          className="w-full"
                          src={item.image}
                          alt="templates image"
                          priority
                          width={500}
                          height={300}
                        />
                      </Link>
                      <p className="mt-3 text-sm font-semibold text-gray-700 dark:text-light">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )
          )}
        </article>
      </div>
    </section>
  );
};

export default FreeTemplates;
