"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import useSWR from "swr";

const MakeFree = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01, // Trigger animation only once
  });
  const animationVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  const animationTransition = {
    duration: 1,
    ease: "easeOut",
  };

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    `http://localhost:3000/api/posts`,
    fetcher
  );
  return (
    <motion.div
      variants={animationVariants}
      initial="initial"
      animate={inView ? "animate" : "initial"} // Animate when in view
      exit="exit"
      transition={animationTransition}
      ref={ref} // Attach the ref to trigger when in view
    >
      <section className="grid grid-cols-3 gap-6 p-16 py-4 lg:grid-cols-2 lg:p-8 md:block sm:p-1 sm:py-1">
        {data
          ?.slice()
          .reverse()
          ?.map(
            (item, index) =>
              index < 3 && (
                <div
                  key={item._id}
                  className="rounded overflow-hidden shadow-lg w-full md:mb-4 dark:shadow-white"
                >
                  <div className="relative">
                    <Link href={`/templates/${item._id}`}>
                      <Image
                        className="w-full h-44"
                        src={item.image}
                        alt="Sunset in the mountains"
                        width={300}
                        height={300}
                      />
                    </Link>

                    <div className="absolute top-0 right-0 rounded-lg bg-red-500 px-4 py-2 text-light text-sm font-bold">
                      New
                    </div>
                  </div>
                  <div className="px-6 py-0">
                    <Link
                      href={`/templates/${item._id}`}
                      className="font-semibold text-xl mt-4 text-dark inline-block hover:text-red-800 transition duration-500 ease-in-out"
                    >
                      {item.title}
                    </Link>
                    <p className="text-gray-500 text-sm mt-3 dark:text-light">
                      {item.description}
                    </p>
                  </div>
                  <div className="px-6 py-4 flex flex-row items-center">
                    <Link
                      href={`/templates/${item._id}`}
                      className="text-red-600 hover:text-gray-800 font-semibold"
                    >
                      See Template...
                    </Link>
                  </div>
                </div>
              )
          )}
      </section>
      <Link
        href="/templates"
        className="text-xl text-dark dark:text-light ml-[50%] sm:ml-[40%] sm:text-sm font-semibold hover:underline hover:font-bold hover:text-red-600"
      >
        See More...
      </Link>
    </motion.div>
  );
};

export default MakeFree;
