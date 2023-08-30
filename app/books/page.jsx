/* eslint-disable @next/next/no-img-element */
import AnimatedText from "../components/AnimatedText";
import Advices from "../components/Advices";
import React, { Suspense } from "react";
import MyBooks from "../components/MyBooks";
import Loading from "../loading";
export const metadata = {
  title: "medCode|Books",
  description: `Discover a diverse range of titles, spanning from introductory guides for beginners to advanced texts that delve into the intricacies of algorithms, data structures, software development, and more. Our selection includes books on programming languages such as Python, Java, C++, and JavaScript, ensuring there's something for every coding enthusiast, whether you're just starting your journey or seeking to refine your expertise`,
  keywords: `Algorithm tutorials, Data structures, Python programming, Coding guides, Mathematics books, Programming books
  Beginner programming , Advanced programming, C++ resources`,
  alternates: {
    canonical: `/books`,
    languages: {
      en: `/en/books`,
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
      <div className="p-20 lg:py-16 bg-gradient-to-r from-slate-950 via-slate-700 to-slate-600">
        <AnimatedText
          text="Today a reader, tomorrow a leader..."
          className="text-3xl py-2 text-light lg:text-3xl"
        />
        <Advices />
      </div>
      <div className="dark:bg-dark xs:pt-4">
        <h1 className="text-3xl text-gray-700 font-sans py-5 px-8 font-bold dark:text-light md:text-2xl xs:text-xl xs:py-2">
          Recent Books That Every Programmer Must Read Once:
        </h1>
        <div className="grid grid-cols-4 p-16 gap-6 py-4 xl:grid-cols-3 xl:p-16 lg:p-4 md:p-10 md:gap-4 sm:block dark:bg-dark">
          <Suspense fallback={<Loading />}>
            <MyBooks />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Books;
