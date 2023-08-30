/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import MyTemp from "../components/MyTemp";
import TransitionEffect from "../components/TransitionEffect";
async function getData() {
  const res = await fetch(`http://localhost:3000/api/posts`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export const metadata = {
  title: "medCode|Free Templates & Components",
  description: `A free repository of open source Tailwind CSS components and templates to bootstrap your new apps, projects or landing sites!`,
  alternates: {
    canonical: `/templates`,
    languages: {
      en: `/en/templates`,
    },
  },
};
const page = async () => {
  const data = await getData();
  return (
    <>
      <TransitionEffect />
      <MyTemp />
      <article className="grid grid-cols-3 gap-6 p-16 xl:gap-4 xl:p-8 lg:grid-cols-2 lg:gap-6 lg:p-10 sm:flex flex-wrap dark:bg-dark">
        {data.map((item) => (
          <div
            key={item._id}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <img
              className="w-full"
              src={item.image}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-2">
              <Link
                href={`/templates/${item._id}`}
                className="font-bold text-xl mb-2 mt-2 text-purple-600 hover:underline"
              >
                {item.title}
              </Link>
              <p className="text-gray-700 text-sm mt-2 dark:text-light">
                {item.description}
              </p>
            </div>
            <div className="pt-1 pb-3 flex justify-between px-4 p-6">
              <span className="bg-gray-200 rounded-full text-sm p-1 py-1 px-2 font-semibold text-gray-700 ">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </article>
    </>
  );
};
export default page;
