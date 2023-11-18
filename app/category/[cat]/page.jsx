import React from "react";
import styles from "@/app/components/categoryList/categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/app/components/Layout";
import ArticlesByCat from "@/app/components/ArticlesByCat";
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
    return notFound();
  }
  return res.json();
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
      title: `Blogs About ${params.cat}`,
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
  const posts = await getPosts(params.cat);
  const category=await getData();
  const myTitle = `Blogs About ${params.cat}`;
  return (
    <Layout className="py-4 px-16 p-8 xl:px-8 xl:p-6">
      <h1 className="px-10 text-red-600 text-3xl font-outFit font-bold uppercase mt-4">
        {myTitle}
      </h1>
      <div className="px-2 mt-6">
        <span className="px-10 py-8 mt-4 text-red-600 font-bold text-xl sm:text-sm">
          Popular Categories
        </span>
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
      <ArticlesByCat posts={posts} />
    </Layout>
  );
};
export default Card;
