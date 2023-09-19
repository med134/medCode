"use client";
/* eslint-disable @next/next/no-img-element */
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import Link from "next/link";
import Seo from "./Seo";
import { getData } from "./FetchData";
import NewsArticles from "./NewsArticles";
import Image from "next/image";

export async function FirstBlog() {
  const data = await getData();
  return (
    <section className="py-2 text-black dark:bg-dark">
      <div className="row-gap-12 p-10 lg:p-6 lg:gap-2 grid grid-cols-2 gap-10 md:flex md:flex-col sm:p-2">
        <div className="flex flex-col">
          <div className="">
            <div className="font-sans text-4xl font-bold tracking-tighter">
              <span className="leading-snug dark:text-light md:text-3xl font-semibold">
                code chronicles : unveiling the world of programming
              </span>
            </div>
            <p className="mt-6 text-lg text-gray-700 dark:text-light font-lexend xs:text-sm">
              Explore the latest insights, tutorials,Projects, free code, and
              expert advice on programming and software development. Elevate
              your coding skills with our comprehensive collection of articles
              and resources.
            </p>
          </div>
          <div className="relative mt-8 w-full overflow-hidden rounded-xl">
            <NewsArticles />
          </div>
        </div>

        <div className="mt-10 p-8 md:flex-col sm:p-0 sm:w-full">
          {data?.map((res) =>
            res.id === 1486106 ? (
              <div
                key={res.id}
                className="group relative mb-4 overflow-hidden rounded-md border bg-white py-2 md:px-0 text-black shadow-lg transition-all duration-200 ease-in-out"
              >
                <Image
                  className="w-full h-auto rounded-lg"
                  src={res.cover_image}
                  alt="image articles"
                  priority
                  width={500}
                  height={400}
                />
                <div className="font-lexend ml-6 py-6">
                  <div className="absolute right-6 flex">
                    <p className="flex items-center mr-4 text-borderColor">
                      {" "}
                      <AiOutlineHeart
                        fontSize={20}
                        className="text-borderColor"
                      />
                      {res.public_reactions_count}
                    </p>
                    <p className="flex items-center text-borderColor">
                      {" "}
                      <AiOutlineComment
                        className="text-borderColor"
                        fontSize={20}
                      />
                      {res.comments_count}
                    </p>
                  </div>
                  <p className="text-xs mt-2 uppercase font-bold text-borderColor">
                    Article
                  </p>
                  <p className="mt-2 font-sans text-xl font-bold sm:text-[16px]">
                    {res.title}
                  </p>
                  <p className="mt-4 sm:text-sm">{res.description}</p>
                </div>
                <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-slate-50 px-10 text-black opacity-0 transition group-hover:opacity-100">
                  <Link
                    href={res.url}
                    target="_blank"
                    className="text-2xl text-dark underline select-none font-bold cursor-pointer"
                  >
                    Read More...
                  </Link>
                </div>
              </div>
            ) : null
          )}
          <Seo />
        </div>
      </div>
    </section>
  );
}
