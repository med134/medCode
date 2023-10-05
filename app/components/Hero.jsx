import { getArticles } from "./FetchData";
import Link from "next/link";
import Image from "next/image";
import Layout from "./Layout";
import React from "react";

const Card = async () => {
  const articles = await getArticles();
  console.log(articles)
  return (
    <>
      <Layout className="p-10 py-4 xl:p-4 xl:px-6 md:items-center sm:p-1 sm:py-1 sm:px-1">
        {articles.map(
          (item, index) =>
            index === 0 && (
              <div key={item._id} className="container mx-auto px-4 sm:px-1">
                <div className="grid grid-cols-2 w-full item-center md:block md:justify-center">
                  <div className="w-[500px] h-full md:w-full lg:w-full md:px-6">
                    <Image
                      src={item.image}
                      alt="blogs_images"
                      className="w-[500px] h-full rounded-lg shadow-lg hover:scale-110 cursor-pointer"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="md:w-full mb-8 md:mb-0 text-gray-800 p-6 sm:mt-0">
                    <span className="text-gray-500">
                      {item.createdAt.slice(0, 10)}
                    </span>
                    <h1 className="font-bold text-3xl leading-tight mb-4 sm:text-xl">
                      {item.title}
                    </h1>
                 {/*    <p className="text-medium text-gray-700 lg:text-sm mb-2">
                      {item.shortDescription.slice(0,80)}...
                    </p> */}
                    <span className="font-bold text-sm mb-5">{item.tags}</span>
                    <Link
                      href={`/blogs/${item._id}`}
                      className="block font-semibold mt-4 text-rose-500 transition duration-100 hover:text-rose-600 hover:underline active:text-rose-700"
                    >
                      Read more...
                    </Link>
                  </div>
                </div>
              </div>
            )
        )}
      </Layout>
    </>
  );
};

export default Card;
