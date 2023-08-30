/* eslint-disable @next/next/no-img-element */
import pro from "../images/postera.png";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import Link from "next/link";
import { getData } from "./FetchData";
import Seo from "./Seo";

export async function FirstBlog() {
  const data = await getData();
  return (
    <section className="py-2 text-black dark:bg-dark">
      <div className="w-full px-6 lg:px-12 md:px-0 xs:px-1">
        <div className="row-gap-12 p-10 lg:p-6 lg:gap-2 grid grid-cols-2 gap-10 md:flex md:flex-col sm:p-2">
          <div className="flex flex-col">
            <div className="">
              <h2 className="font-sans text-4xl font-bold tracking-tighter">
                <span className="leading-snug dark:text-light md:text-3xl">
                  code chronicles : unveiling the world of programming
                </span>
              </h2>
              <p className="mt-6 text-lg text-gray-700 dark:text-light font-lexend xs:text-sm">
                Explore the latest insights, tutorials,Projects, free code, and
                expert advice on programming and software development. Elevate
                your coding skills with our comprehensive collection of articles
                and resources.
              </p>
            </div>
            <div className="relative mt-8 w-full overflow-hidden rounded-xl">
              <div className="inset-0 bg-purple-300 sm:h-44">
                <Image
                  className="w-full object-cover opacity-10 transition-all duration-300 ease-in-out group-hover:opacity-80"
                  src={pro}
                  alt="hello"
                  priority
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <a
                  href="#"
                  title=""
                  className="inline-flex cursor-pointer items-center justify-center rounded-md border-2 border-white px-1 text-xs font-semibold text-white transition-all duration-200 ease-in-out hover:bg-white hover:text-black focus:shadow-md sm:py-2 sm:px-5 sm:text-sm"
                  role="button"
                >
                  <svg
                    className="mr-2 h-6 w-6 "
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z"
                      className=""
                    />
                  </svg>
                  Watch Intro
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 p-8 md:flex-col sm:p-0 sm:w-full">
            {data.map((res) =>
              res.id === 1486106 ? (
                <div
                  key={res.id}
                  className="group relative mb-4 overflow-hidden rounded-md border bg-white py-2 md:px-0 text-black shadow-lg transition-all duration-200 ease-in-out"
                >
                  <img
                    className="w-full h-auto rounded-lg"
                    src={res.cover_image}
                    alt="image_articls"
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
                    <h3 className="text-xs mt-2 uppercase font-bold text-borderColor">
                      Article
                    </h3>
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
      </div>
    </section>
  );
}
