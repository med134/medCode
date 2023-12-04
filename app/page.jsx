import React from "react";
import "./globals.css";
import { AiTwotoneSound } from "react-icons/ai";
import CategoryList from "./components/HeaderCategory.jsx";
import Card from "./components/Hero";
import SideBar from "./components/SideBar";
import Search from "./components/Search";
import Link from "next/link";
import Aside from "./components/Aside";
import Image from "next/image";
import Youtube from "./components/Youtube";
import YouTubeSubscribe from "./components/YoutubeSubscribe";
import { YoutubeImage } from "./components/Icons";
import Crypto from "./components/Crytpo";

export const metadata = {
  metadataBase: new URL("https://www.medcode.dev"),
  title: "medCode Web Development Company",
  description: `Learning programming is accessible for beginners through free web design and web development services. These courses introduce essential front-end developer skills and programming languages,
    `,
  keywords: [
    "Web Development",
    "how to learn programming",
    "computer programming",
    "computer programming software",
    "programming languages for beginners",
    "software programming courses",
    "python programming",
    "Artificial Intelligence",
    "best programming languages",
    "rust programming language",
    " Programming Languages",
    "best laptop for programming",
    "Software Engineering",
    "programming wallpaper",
    "swift programming language ",
    "Front-end",
    "UI/UX Design",
    "Frameworks",
    "Best Practices",
    "Web Design",
    "Mobile Development",
    "Learning Resources",
    "Problem Solving",
    "Code Snippets",
  ],
  referrer: "origin-when-cross-origin",
  authors: [
    { name: "med dakir" },
    { name: "medCode", url: "https://www.medcode.dev/" },
  ],
  creator: "Med Dakir",
  publisher: "Med Dakir",
  formatDetection: {
    email: "med@vivacode.dev",
    address: "312 Lovely Street, NY",
    telephone: false,
  },
  generator: "Next.js",
  applicationName: "MedCode",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: `/`,
    languages: {
      "en-us": `/en`,
    },
  },
};

export default async function Home() {
  return (
    <>
      <Aside />
      <Search />
      <div className="bg-light dark:bg-dark w-screen">
        <CategoryList />
        <div className="main-content bg-light dark:bg-dark gap-6 px-12 py-4 md:block">
          <div className="main">
            <Card />
          </div>
          <div className="side">
            <SideBar />
          </div>
        </div>
        <div className="p-10 bg-gradient-to-r from-rose-50 to-slate-300 mt-16 dark:bg-gradient-to-r dark:from-[#1b1b1b] dark:to-[#1b1b1b]">
          <div className="container m-auto px-6 dark:bg-dark">
            <div className="flex justify-between items-center dark:bg-dark md:flex-col-reverse md:items-start">
              <div className="w-1/2 lg:p-0 p-7 dark:bg-dark md:w-full">
                <span className="text-2xl font-bold flex justify-start items-center text-gray-800 dark:text-light">
                  <AiTwotoneSound />
                  <p className="ml-2 sm:text-xl">Templates & Components</p>
                </span>{" "}
                <h1 className="text-4xl text-gray-900 font-bold leading-tight mb-5 sm:text-sm capitalize dark:text-light lg:text-xl">
                  {" "}
                  Professional Free Tailwind Components & Templates & theme
                  designed for developers
                </h1>
                <p className="text-xl dark:text-light lg:text-sm">
                  {" "}
                  With MedCode Templates Tailwind you can optimized the
                  customization process to save your team time when building
                  websites.{" "}
                </p>
                <div className="py-5">
                  <Link
                    href="/templates"
                    className="text-white rounded-full py-2 xs:text-sm px-5 text-lg font-semibold bg-purple-600 inline-block border border-purple-600 mr-3 hover:bg-light hover:text-dark"
                  >
                    Start with free Templates
                  </Link>
                </div>
              </div>
              <div className="order-2 md:order-1">
                <Image
                  src="https://i.ibb.co/rHvLvvr/Untitled.png"
                  width={400}
                  height={400}
                  alt="photo-templates"
                  className="w-full rounded transform scale-100 perspective-[1040px] rotate-y-[-11deg] rotate-x-[2deg] rotate-[2deg] md:transform-none md:mb-3 md:w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="main-content bg-light gap-6 px-12 py-4 md:block md:px-3 md:py-2 dark:bg-dark">
          <div className="md:p-10">
            <span className="flex justify-start items-center text-2xl dark:text-light underline font-bold mb-4 text-gray-800 font-lexend rounded-lg sm:text-sm xl:text:sm">
              <YoutubeImage />
              <p className="ml-2 ">
                {" "}
                Youtube Shorts for Components with code source
              </p>
            </span>
            <Youtube />
          </div>

          <div className="mt-20 md:p-10 md:mt-4">
            <div className="block justify-start items-start md:block p-4 bg-white h-28 mb-6 dark:bg-dark rounded overflow-hidden shadow-lg border-2">
              <Link
                href="https://www.youtube.com/@VivaCode99"
                className="inline-flex items-center py-1 dark:text-light px-4 mb-3 bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-white rounded-md transition duration-300"
              >
                <svg className="w-8 h-8 fill-current mr-2" viewBox="0 0 24 24">
                  <path d="M21.9 5.9c-.2-.7-.7-1.2-1.4-1.4C18.3 4 12 4 12 4s-6.3 0-8.5.5c-.7.2-1.2.7-1.4 1.4C2 8.1 2 12 2 12s0 3.9.5 5.1c.2.7.7 1.2 1.4 1.4 2.2.5 8.5.5 8.5.5s6.3 0 8.5-.5c.7-.2 1.2-.7 1.4-1.4.5-1.2.5-5.1.5-5.1s0-3.9-.5-5.1zM9.5 15.5V8.5l6.5 3z" />
                </svg>
                <span>Subscribe Now</span>
              </Link>
              <YouTubeSubscribe />
            </div>
            <Crypto />
          </div>
        </div>
      </div>
    </>
  );
}
