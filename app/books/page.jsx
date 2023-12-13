/* eslint-disable @next/next/no-img-element */
import AnimatedText from "../components/AnimatedText";
import Advices from "../components/Advices";
import React, { Suspense } from "react";
import MyBooks from "../components/MyBooks";
import Loading from "../loading";
export const metadata = {
  title: "medCode-Books",
  description: `Dive into the World of Programming with Our Curated Selection of Books.Whether you're a novice eager to start your coding journey or an experienced developer`,
  keywords: [
    "Web Development books",
    "how to learn programming",
    "computer programming",
    "computer programming software",
    "programming languages for beginners",
    "software programming courses",
    "python programming",
    "Artificial Intelligence",
    "best programming languages",
    "rust programming language",
    " Programming Languages",
    "best laptop for programming",
  ],

  alternates: {
    canonical: `/books`,
    languages: {
      "en-Us": `/en-us/books`,
    },
    types: {
      "application/rss+xml": "https://www.medcode.dev/rss",
    },
  },
  openGraph: {
    title: "medCode|Books",
    description: `Discover a diverse range of titles, spanning from introductory guides for beginners to advanced texts that delve into the intricacies of algorithms, data structures, software development, and more. Our selection includes books on programming languages such as Python, Java, C++, and JavaScript, ensuring there's something for every coding enthusiast, whether you're just starting your journey or seeking to refine your expertise`,

    images: [
      {
        url: "/app/images/postera.png",
        width: "400",
        height: "300",
      },
    ],
  },
};

const Books = () => {
  return (
    <section className="dark:bg-dark">
      <div className="p-20 lg:py-16 bg-gradient-to-r from-slate-950 via-slate-700 to-slate-600 xs:p-4">
        <AnimatedText
          text="Today a reader, tomorrow a leader..."
          className="text-3xl py-2 text-light lg:text-3xl"
        />
        <Advices />
      </div>
      <div className="dark:bg-dark xs:pt-4">
        <p className="text-3xl text-gray-700 font-sans py-5 px-8 font-bold dark:text-light md:text-2xl xs:text-xl xs:py-2">
          Recent Books That Every Programmer Must Read Once:
        </p>
        <div className="grid grid-cols-4 p-16 gap-6 py-4 xl:grid-cols-3 xl:p-16 lg:p-4 md:p-10 md:gap-4 sm:block dark:bg-dark">
          <MyBooks />
        </div>
      </div>
    </section>
  );
};

export default Books;
