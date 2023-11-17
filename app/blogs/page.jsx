import React from "react";
import AnimatedText from "../components/AnimatedText";
import styles from "../components/categoryList/categoryList.module.css";
import Layout from "../components/Layout";
import Card from "../components/Hero";
import CardList from "../components/CardList";
import Link from "next/link";
import MakeFree from "../components/MakeFree";
import Article from "../components/Article";
import Image from "next/image";

export const metadata = {
  title: "medCode Blogs & Articles",
  description: `Browse through MedCode collection of software engineering articles blogs and debugging tutorials  Next.js, React.js, javascript html ,css web development`,
  keywords: [
    "best programming blogs",
    "programming blogs",
    " Programming Languages",
    "Software Engineering",
    "software development blogs",
    "UI/UX Design",
    "computer programming articles",
    "Cybersecurity programming",
    "Best Practices",
    "Web Design",
    "Mobile Development",
    "Learning Resources",
    "IDEs (Integrated Development Environments)",
    "Problem Solving",
    "Code Snippets",
  ],
  referrer: "origin-when-cross-origin",
  authors: [
    { name: "med dakir" },
    { name: "medCode blogs", url: "https://www.medcode.dev/blogs" },
  ],
  verification: {
    google: "cFXi6ELWEfl4UY9OE5i_S5QFU3LbUvdxGgW6RQgHWw",
  },
  alternates: {
    canonical: `/blogs`,
    languages: {
      "en-us": `/en/blogs`,
    },
  },
  openGraph: {
    title: "medCode Blogs & Articles",
    description: `Browse through MedCode collection of software engineering articles blogs and 
      tutorials.`,
    images: [
      {
        url: "https://i.ibb.co/rHvLvvr/Untitled.png",
        width: "400",
        height: "300",
      },
    ],
  },
};
const getData = async () => {
  const res = await fetch("https://www.medcode.dev/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const Page = async () => {
  const data = await getData();
  return (
    <Layout className="p-6 2xl:p-4 lg:p-4 md:p-2 xs:p-0">
      <AnimatedText
        className="text-[40px] m-6 text-borderColor md:text-4xl xs:text-2xl"
        text="Software Development Skills:Tips and Tricks for Success"
      />
      <Card />
      <div className="px-2 mt-6">
      <span className="px-10 py-8 mt-4 text-red-600 font-bold text-xl sm:text-sm">
        Popular Categories
      </span>
      <div className="grid grid-cols-7 mt-4 gap-2 px-16 lg:flex lg:justify-evenly lg:flex-wrap lg:px-8 xs:flex">
        {data?.map((item) => (
          <Link
            className={`${styles.category} xs:shrink w-8 h-8 dark:text-light`}
            key={item._id}
            href={`/category/${item.value}`}
          >
            {item.image && (
              <Image
                src={item.image}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.label}
          </Link>
        ))}
      </div>
    </div>
      <CardList />
      <section className="mx-auto max-w-screen-xl py-1 text-blue-900 sm:py-4 lg:py-4">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center py-8 lg:py-2">
            <p className="text-xl font-bold text-red-500">MEDCODE</p>
            <p className="mt-2 text-xl font-bold text-gray-800 sm:text-2xl xl:text-5xl xs:text-xl dark:text-light">
              Make It Easy: Free Templates & Components
            </p>
          </div>
          <MakeFree />
        </div>
      </section>
      <Article />
    </Layout>
  );
};
export default Page;
