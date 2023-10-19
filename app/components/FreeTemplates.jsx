"use client";
import React from "react";
import Image from "next/image";
import { getAll } from "./FetchData";
import { motion,AnimatePresence } from "framer-motion";

const FreeTemplates = async () => {
  const data = await getAll();

  return (
    <section className="mx-auto max-w-screen-xl py-8 text-blue-900 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold text-red-500">MEDCODE</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-800 sm:text-2xl xl:text-5xl xs:text-xl dark:text-light">
            Make It Easy: Free Templates & Components
          </h2>
        </div>
        <article className="grid grid-cols-3 gap-6 p-16 xl:gap-4 xl:p-8 lg:grid-cols-2 lg:gap-6 lg:p-10 sm:flex flex-wrap sm:p-2 dark:bg-dark">
          <AnimatePresence> 
          {data.map(
            (item, index) =>
              index > 5 && (
                <motion.div
                  key={item._id}
                  className="bg-white p-6 shadow-lg rounded-lg dark:bg-dark dark:shadow-white"
                  initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                  animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                >
                  <h3 className="text-xl py-2 font-bold text-gray-800 dark:text-light">
                    {item.title}
                  </h3>
                  <Image
                    className="w-full"
                    src={item.image}
                    alt="templates image"
                    priority
                    width={500}
                    height={300}
                  />
                  <p className="mt-3 text-sm font-semibold text-gray-700 dark:text-light">
                    {item.description}
                  </p>
                </motion.div>
              )
          )}
          </AnimatePresence>
        </article>
      </div>
    </section>
  );
};

export default FreeTemplates;
