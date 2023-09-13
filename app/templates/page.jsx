/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import TransitionEffect from "../components/TransitionEffect";
import { BgTemplates } from "../components/Icons";
async function getData() {
  const res = await fetch(`https://medcode.dev/api/posts`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export const metadata = {
  title: "free templates & components",
  description: `Browse through MedCode collection of free templates and components for tailwind css and bootstrap
  with full free code source`,
  keywords: [
    "Web Development",
    "Software Engineering",
    "tailwind css",
    "free templates",
    "free components",
    "bootstrap",
    "free code",
    "Front-end",
    "UI/UX Design",
    "Frameworks",
    "Best Practices",
    "Web Design",
    "Learning Resources",
    "IDEs (Integrated Development Environments)",
    "Code Snippets",
  ],
  alternates: {
    canonical: `/templates`,
    languages: {
      en: `/en/templates`,
    },
  },
  openGraph: {
    title: "Free Templates & Components",
    description: `Browse through MedCode collection of free templates and components for tailwind css and bootstrap
      with full free code source`,
    images: [
      {
        url: "/app/images/temp.png",
        width: "400",
        height: "300",
      },
    ],
  },
};
const page = async () => {
  const data = await getData();
  return (
    <>
      <TransitionEffect />
      <div className="bg-white dark:bg-dark dark:text-light">
        <div className="p-16 my-auto w-full py-20 bg-indigo-600 px-6 leading-4 xs:p-8 xs:py-6 shadow-lg xl:w-screen dark:bg-dark dark:text-light ">
          <div className="w-full">
            <div className="mb-3 font-normal text-xl px-10 text-white xs:text-2xl xs:hidden">
              Free Templates & components with free code Sources
            </div>
            <h5 className="mb-4 font-sans text-4xl font-bold text-light p-4 px-10 sm:text-2xl xs:px-4">
              Discover Free & Premium Full Responsive Templates and components for Front-end
              Developers
            </h5>
            <p className="text-light text-sm px-10 xs:px-4">
              Open source UI & UX components and templates to bootstrap your new
              apps, projects or landing sites!
            </p>

            <div className="flex mt-8 px-10 sm:text-xs sm:px-4">
              <ul className="inline-flex bg-purple-400 py-4 text-light font-lexend rounded-xl px-10 sm:px-4">
                <Link target="_blank" href="https://react.dev/">
                  {" "}
                  <li className="cursor-pointer hover:underline">React js</li>
                </Link>
                <Link target="_blank" href="https://nextjs.org/">
                  <li className="ml-4 cursor-pointer hover:underline">
                    Next js
                  </li>
                </Link>
                <Link target="_blank" href="https://tailwindcss.com/">
                  {" "}
                  <li className="ml-4 cursor-pointer hover:underline">
                    Tailwind css
                  </li>
                </Link>

                <Link target="_blank" href="https://getbootstrap.com/">
                  {" "}
                  <li className="ml-4 cursor-pointer hover:underline">
                    Bootstrap
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="pointer-events-none absolute right-0 bottom-0 w-4/5 text-white opacity-50">
            <BgTemplates />
          </div>
        </div>
        <div className="p-6 px-16 dark:text-light xs:px-8 xs:p-2">
          <h1 className="text-3xl font-lexend mt-4 sm:text-2xl">
            Latest components & projects & templates
          </h1>
          <p className="sm:text-sm mt-2">
            The newest featured & responsive templates and full project with
            different frameworks.
          </p>
        </div>
      </div>
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
