
import React from "react";
import Link from "next/link";
import { BgTemplates } from "./Icons";


const MyTemp = () => {
  return (
    <>
      <div className="bg-white dark:bg-dark dark:text-light">
        <div className="p-16 my-auto w-full py-20 bg-indigo-600 px-6 leading-4 xs:p-8 xs:py-6 shadow-lg xl:w-screen dark:bg-dark dark:text-light ">
          <div className="w-full">
            <div className="mb-3 font-normal text-xl px-10 text-white xs:text-2xl xs:hidden">
              Free Templates & code Sources
            </div>
            <h5 className="mb-4 font-sans text-4xl font-bold text-light p-4 px-10 sm:text-2xl xs:px-4">
              Discover Free & Premium Full Responsive Templates for Front-end
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
            Latest components & projects.
          </h1>
          <p className="sm:text-sm mt-2">
            The newest featured & responsive templates and full project with
            different frameworks.
          </p>
        </div>
      </div>
    </>
  );
};

export default MyTemp;
