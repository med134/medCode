import React from "react";
import Link from "next/link";
import CategoryList from "@/app/components/categoryList/CategoryList ";
import Image from "next/image";
import Layout from "@/app/components/Layout";
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
const Card = async ({ params }) => {
  const posts = await getPosts(params.cat);
  return (
    <Layout className="py-4 px-16 p-8 xl:px-8 xl:p-6">
      <h1 className="px-10 text-red-600 text-3xl font-outFit font-bold uppercase mt-4">
        #{params.cat}
      </h1>
      <CategoryList />
      <div className="grid justify-center grid-cols-3 gap-6 mt-8 md:block">
        {posts?.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-lg dark:shadow-white rounded-md lg:block md:mb-6 lg:w-full sm:w-full dark:bg-dark dark:border-light"
          >
            <Link
              href={`https://www.medcode.dev/api/blogs/${item._id}`}
              className="hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <Image
                width={300}
                height={300}
                className="object-cover w-full rounded h-44 dark:bg-gray-500 md:object-fill"
                src={item.image}
                alt="blog_image"
              />
              <div className="p-6 space-y-2">
                <span className="text-red-600 font-bold tex-sm">
                  #{item.category}
                </span>
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline lg:text-xl">
                  {item.title}
                </h3>
                <span className="text-xs dark:text-gray-400">
                  {item?.createdAt.slice(0, 10)}
                </span>
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
