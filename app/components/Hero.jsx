"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useSWR from "swr";
import Layout from "./Layout";
import React from "react";
import Loading from "../loading";

const Card = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    `https://www.medcode.dev/api/articles`,
    fetcher
  );
  const childVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
    duration: 2,
  };
  const parentVariants = {
    visible: {
      transition: {
        when: "beforeChildren", // Stagger children animation before parent
        staggerChildren: 0.4, // Delay between each child
      },
    },
  };
  return (
    <Layout className="p-12 py-1 xl:p-4 xl:px-6 md:items-center sm:p-1 sm:py-1 sm:px-1">
      {isLoading ? (
        <Loading />
      ) : (
        data?.map(
          (item, index) =>
            index === data.length - 1 && (
              <div
                ref={ref}
                key={item._id}
                className="container mx-auto px-4 sm:px-1"
              >
                <div className="grid grid-cols-2 w-full item-center md:block md:justify-center">
                  <motion.div
                    initial={{ x: -700 }} // Initial state with 0 opacity and scale
                    animate={{ x: inView ? 0 : -100 }} // Animate when in view
                    transition={{
                      type: "bezier",
                      duration: 1,
                      easing: [0.42, 0, 0.58, 1],
                    }} // Use spring transition
                  >
                    <div className="w-[500px] h-full md:w-full lg:w-full md:px-6">
                      <Image
                        src={item.image}
                        alt="blogs_images"
                        className="w-[500px] h-full rounded-lg shadow-lg hover:scale-110 cursor-pointer"
                        width={500}
                        height={500}
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={parentVariants}
                  >
                    <div className="md:w-full mb-8 md:mb-0 text-gray-800 p-6 sm:mt-0">
                      <motion.div variants={childVariants}>
                        <span className="text-gray-500">
                          {item.createdAt.slice(0, 10)}
                        </span>
                        <h1 className="font-bold text-3xl leading-tight mb-2 sm:text-xl dark:text-light">
                          {item.title}
                        </h1>
                      </motion.div>
                      <motion.div variants={childVariants}>
                        <p className="text-medium text-gray-700 lg:text-sm mb-2 dark:text-light">
                          {item.description.slice(0, 80)}...
                        </p>
                        <span className="font-bold text-sm mb-5 dark:text-light">
                          {item.tags}
                        </span>
                      </motion.div>
                      <motion.div variants={childVariants}>
                        <Link
                          href={`/blogs/${item._id}`}
                          className="block font-semibold mt-4 text-rose-500 transition duration-100 hover:text-rose-600 hover:underline active:text-rose-700"
                        >
                          Read more...
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            )
        )
      )}
    </Layout>
  );
};

export default Card;
