import React from "react";
import CategoryList from "@/app/components/categoryList/CategoryList ";
import Layout from "@/app/components/Layout";
import ArticlesByCat from "@/app/components/ArticlesByCat";

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

  return {
    title: "category page:" + params.cat,
    description:
      `Discover a world of topics and expertise in our category of ${params.cat} Find your passion, delve into knowledge`,
    keywords: ["category", "solution", "questions"],
    alternates: {
      canonical: `https://www.medcode.dev/category/${params.cat}`,
      languages: {
        "en-us": `https://www.medcode.dev/en-us/category${params.cat}`,
      },
      types: {
        "application/rss+xml": "https://www.medcode.dev/rss",
      },
    },
    openGraph: {
      title: "category page:" + params.cat,
      description:
        "Discover a world of topics and expertise in our category pages Find your passion, delve into knowledge",
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
  return (
    <Layout className="py-4 px-16 p-8 xl:px-8 xl:p-6">
      <h1 className="px-10 text-red-600 text-3xl font-outFit font-bold uppercase mt-4">
        #{params.cat}
      </h1>
      <CategoryList />
      <ArticlesByCat posts={posts} />
    </Layout>
  );
};
export default Card;