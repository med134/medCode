import React from "react";
import styles from "@/app/components/categoryList/categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/app/components/Layout";
const getData = async () => {
  const res = await fetch("https://www.medcode.dev/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
async function getPosts(cat) {
  const res = await fetch(
    `https://www.medcode.dev/api/articles?category=${cat}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }
  const posts = await res.json();

  // Assuming 'date' is the field representing the date in each post object
  const sortedPosts = posts?.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return sortedPosts;
}

export async function generateMetadata({ params }) {
  const post = await getPosts(params.cat);
  const heading = `Blogs About ${params.cat}`;

  return {
    title: heading,
    description: `Explore a treasure trove of insightful programming articles and engaging blogs about ${params.cat} Discover expert-written content covering languages, frameworks`,
    keywords: [
      "React",
      "solution",
      "coding",
      "articles",
      "programming",
      "blogs",
      "learn",
      "money",
      "easy",
    ],
    authors: [
      { name: "med dakir" },
      {
        name: "medCode",
        url: `https://www.medcode.dev/category/${params.cat}`,
      },
    ],
    alternates: {
      canonical: `https://www.medcode.dev/category/${params.cat}`,
      languages: {
        "en-us": `https://www.medcode.dev/en-us/category/${params.cat}`,
      },
      types: {
        "application/rss+xml": "https://www.medcode.dev/rss",
      },
    },
    openGraph: {
      title:
        params.cat === "all"
          ? `All Blogs & Articles`
          : `All Blogs About ${params.cat}`,
      description: `Explore a treasure trove of insightful programming articles and engaging blogs about ${params.cat} Discover expert-written content covering languages, frameworks`,
      images: [
        {
          url: post.image,
          width: "400",
          height: "300",
        },
      ],
    },
  };
}

const Card = async ({ params }) => {
  const sortedPosts = await getPosts(params.cat);
  const category = await getData();
  console.log("sorted posts", sortedPosts);

  const myTitle =
    params.cat === "all"
      ? `All Blogs & Articles`
      : `All Blogs About ${params.cat}`;
  return (
    <Layout className="py-4 px-16 p-8 xl:px-8 xl:p-6">
      <h1 className="px-10 text-red-600 sm:text-sm sm:px-2 text-3xl font-outFit font-bold uppercase mt-4">
        {myTitle}
      </h1>
      <div className="px-2 mt-6">
        <h2 className="px-10 py-8 mt-4 text-red-600 font-bold text-xl sm:text-sm">
          Popular Categories
        </h2>
        <div className="grid grid-cols-7 mt-4 gap-2 px-16 lg:flex lg:justify-evenly lg:flex-wrap lg:px-8 xs:flex">
          {category?.map((item) => (
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
      <div className="grid justify-center grid-cols-3 gap-6 mt-8 md:block">
        {sortedPosts?.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-lg dark:shadow-white rounded-md lg:block md:mb-6 lg:w-full sm:w-full dark:bg-dark dark:border-light"
          >
            <Link
              href={`https://www.medcode.dev/blogs/${item._id}`}
              className="hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <Image
                width={300}
                height={300}
                className="object-cover w-full rounded h-44 dark:bg-gray-500 md:object-fill"
                src={item.image}
                alt="blog_image"
              />
              <div className="p-6 space-y-2 block">
                <p className="text-red-600 font-bold tex-sm">
                  #{item.category}
                </p>
                <span
                  className="bg-gradient-to-r text-2xl font-semibold from-red-200 to-red-400 bg-[length:0px_10px] bg-left-bottom
      bg-no-repeat
      transition-[background-size]
      duration-500
      hover:bg-[length:100%_3px]
      group-hover:bg-[length:100%_10px]
      dark:from-red-800 dark:to-purple-900"
                >
                  {item.title}
                </span>
                <p className="text-xs dark:text-gray-400">
                  {item?.createdAt.slice(0, 10)}
                </p>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default Card;
