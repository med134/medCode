import React from "react";
import AnimatedText from "../components/AnimatedText";
import styles from "../components/categoryList/categoryList.module.css";
import Layout from "../components/Layout";
import Card from "../components/Hero";
import Youtube from "../components/Youtube";
import Link from "next/link";
import MakeFree from "../components/MakeFree";
import Image from "next/image";
import { getArticle } from "../components/FetchData";
import { getDevTo } from "../components/FetchData";

export const metadata = {
  metadataBase: new URL("https://medcode.dev"),
  title: "Insightful Articles: Software & Web Development Tips|medcode",
  description: `Explore in-depth articles on software engineering, web and mobile development. Get expert tips and solutions for debugging errors. Your go-to source for tech insights!`,
  keywords: [
    "programming blogs",
    "blogs",
    "Programming Languages",
    "Software",
    "development",
    "UI/UX Design",
    "Beginners",
    "learn",
    "free",
    "solution",
  ],
  referrer: "origin-when-cross-origin",
  authors: [
    { name: "med dakir" },
    { name: "medCode blogs", url: "https://www.medcode.dev/blogs" },
  ],
  verification: {
    google: "cFXi6ELWEfl4UY9OE5i_S5QFU3LbUvdxGgW6RQgHWw",
  },
  category: "technology",
  alternates: {
    canonical: "https://medcode.dev/blogs",
    languages: {
      "en-US": "/en-US",
    },
    types: {
      "application/rss+xml": "https://medcode.dev/rss",
    },
  },
  openGraph: {
    title: "Insightful Articles: Software & Web Development Tips",
    description: `Explore in-depth articles on software engineering, web and mobile development. Get expert tips and solutions for debugging errors. Your go-to source for tech insights!`,
    url: "https://medcode.dev/blogs",
    images: [
      {
        url: "https://i.ibb.co/rHvLvvr/Untitled.png",
        width: "400",
        height: "300",
      },
    ],
    alternates: {
      canonical: "https://medcode.dev/blogs",
      languages: {
        "en-US": "/en-US",
      },
      types: {
        "application/rss+xml": "https://medcode.dev/rss",
      },
    },
    locale: "en_US",
    type: "website",
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
  const article = await getArticle();
  const dev =await getDevTo();
  return (
    <Layout className="p-6 2xl:p-4 lg:p-4 md:p-2 xs:p-0">
      <AnimatedText
        className="text-[40px] m-6 text-borderColor md:text-4xl xs:text-2xl"
        text="Insightful Articles: Software & Web Development Tips |medcode"
      />
      <Card />
      <div className="px-2 mt-6">
        <p className="px-10 py-8 mt-4 text-red-600 font-bold text-xl sm:text-sm">
          Popular Categories
        </p>
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
                  alt={`${item.label} category`}
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
      <section>
        <div className="grid grid-cols-3 gap-10 mt-[-10px] lg:grid-cols-4 p-16 lg:gap-16 lg:p-10 md:block sm:flex flex-wrap sm:p-14 xs:p-12 md:p-16">
          <div className="col-span-2 lg:col-span-2 sm:mb-7">
            <p className="text-xl  space-x-2 font-bold text-gray-800 mb-10 dark:text-light">
              Moore Posts...
            </p>
            <Card />
          </div>
          <div className="col-span-1 lg:col-span-2">
            <span className="text-xl space-x-2 font-bold text-red-600">
              Trending On{" "}
              <span className="text-gray-900 font-bold text-2xl ml-2 dark:text-light">
                DEV.to
              </span>
            </span>
            <section>
              {dev?.map((item, index) =>
                index < 5 ? (
                  <div
                    key={item._id}
                    className="mt-3 bg-white dark:bg-dark shadow-md p-3 border border-b-red-500 dark:border-b-light"
                  >
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
                ) : null
              )}
            </section>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-screen-xl py-1 mb-6 text-blue-900 sm:py-4 lg:py-4">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center py-8 lg:py-2">
            <p className="text-xl font-bold text-red-500">MEDCODE KITS</p>
            <h2 className="mt-2 text-xl font-bold text-gray-800 sm:text-2xl xl:text-5xl xs:text-xl dark:text-light">
              Make It Easy: Free Templates & Components for development kits
            </h2>
          </div>
          <MakeFree />
        </div>
      </div>
      <div className="mx-auto max-w-2xl text-center py-8 lg:py-2">
        <p className="text-xl font-bold text-red-500">
          Articles & Developments
        </p>
        <h3 className="mt-2 text-xl font-bold text-gray-800 sm:text-2xl xl:text-5xl xs:text-xl dark:text-light">
          Languages & Developments: The latest Articles & frameworks About
          Software Developments & engineering
        </h3>
      </div>
      <div className="article gap-16 p-10 lg:p-10 lg:gap-8 md:flex md:flex-col md:items-center">
        <div className="art flex-col justify-start">
          {article.hits?.map((item, index) =>
            index <= 2 ? (
              <div
                key={item._id}
                className="grid gap-6 p-4 overflow-hidden shadow-xl shadow-light"
              >
                <div className="flex flex-1 flex-col justify-between bg-white p-6 lg:py-8 lg:px-7 dark:bg-dark">
                  <div className="flex-1">
                    <p className="text-2xl font-bold dark:text-red-600">
                      Development-Articles
                    </p>
                    <Link
                      href={item.url}
                      target="_blank"
                      className="mt-8 flex-1"
                    >
                      <span className="leading-relaxed text-blue-900 text-xl font-lexend dark:text-light font-semibold">
                        {item.title}
                      </span>
                    </Link>
                  </div>
                  <div className="mt-8 border px-8 inline-flex items-center dark:text-light rounded-md shadow-md text-gray-600 py-1 g-blue-400 ">
                    <div className="">
                      <p className="text-base font-bold ">
                        {item.author}/{item.relevancy_score}
                      </p>
                      <p className="mt-0.5 text-sm">{item.created_at}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
        <div className="slider xs:w-full">
          <div className="max-w-md mb-8 rounded-xl border bg-white p-6 pb-10 text-gray-900 dark:bg-dark dark:text-light">
            <h5 className="text-md text-blue-900 font-medium dark:text-light">
              Trending Languages and frameworks
            </h5>
            <div className="mt-4">
              <p className="float-left mb-2">javascript</p>
              <span className="float-right mb-2">20,00</span>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
                <div className="h-full w-10/12 overflow-hidden rounded-full bg-red-600" />
              </div>
            </div>
            <div className="mt-4">
              <p className="float-left mb-2">Python</p>
              <span className="float-right mb-2">2,000</span>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
                <div className="h-full w-4/12 overflow-hidden rounded-full bg-red-600" />
              </div>
            </div>
            <div className="mt-4">
              <p className="float-left mb-2">Typescript</p>
              <span className="float-right mb-2">1,500</span>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
                <div className="h-full w-3/12 overflow-hidden rounded-full bg-red-600" />
              </div>
            </div>
            <div className="mt-4">
              <p className="float-left mb-2">React js</p>
              <span className="float-right mb-2">260</span>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
                <div className="h-full w-1/12 overflow-hidden rounded-full bg-red-600" />
              </div>
            </div>
          </div>
          <Youtube />
        </div>
      </div>
    </Layout>
  );
};
export default Page;
