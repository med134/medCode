"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import StackOverFlow from "./StackOverFlow";
import Youtube from "./Youtube";

const Article = async () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchSeoData = async () => {
      const res = await fetch(
        `https://hn.algolia.com/api/v1/search?query=software_developments`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setNews(data.hits);
      console.log(data.hits);
    };
    fetchSeoData();
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold px-24 underline xs:text-xl sm:text-center sm:px-0 dark:text-light">
        Trending News and Articles :
      </h1>
      <article className="article gap-16 p-20 lg:p-10 lg:gap-8 md:flex md:flex-col md:items-center">
        <div className="art flex-col justify-start">
          {news.map((item, index) =>
            index <= 4 ? (
              <div
                className="grid gap-6 p-4 overflow-hidden shadow-xl shadow-gray-600"
                key={item.objectID}
              >
                <div className="flex flex-1 flex-col justify-between bg-white p-6 lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <p className="text-2xl font-bold">News-Articles</p>
                    <Link
                      href={item.url}
                      target="_blank"
                      className="mt-8 flex-1"
                    >
                      <h3 className="leading-relaxed text-blue-900 text-xl font-lexend font-semibold">
                        {item.title}
                      </h3>
                    </Link>
                  </div>
                  <div className="mt-8 border px-8 inline-flex items-center rounded-md shadow-md text-gray-600 py-1 g-blue-400 ">
                    <div className="">
                      <p className="text-base font-bold ">
                        {item.author}/{item.relevancy_score}
                      </p>
                      <p className="mt-0.5 text-sm">{item.created_at}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>

        <div className="slider xs:w-full">
          <div className="max-w-md mb-8 rounded-xl border bg-white p-6 pb-10 text-gray-900 dark:bg-dark dark:text-light">
            <p className="text-md text-blue-900 font-medium dark:text-gray-400">
              Trending Languages and frameworks
            </p>
            <div className="mt-4">
              <p className="float-left mb-2">javascript</p>
              <span className="float-right mb-2">20,00</span>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
                <div className="h-full w-10/12 overflow-hidden rounded-full bg-indigo-600" />
              </div>
            </div>
            <div className="mt-4">
              <p className="float-left mb-2">Python</p>
              <span className="float-right mb-2">2,000</span>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
                <div className="h-full w-4/12 overflow-hidden rounded-full bg-indigo-600" />
              </div>
            </div>
            <div className="mt-4">
              <p className="float-left mb-2">Typescript</p>
              <span className="float-right mb-2">1,500</span>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
                <div className="h-full w-3/12 overflow-hidden rounded-full bg-indigo-600" />
              </div>
            </div>
            <div className="mt-4">
              <p className="float-left mb-2">React js</p>
              <span className="float-right mb-2">260</span>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
                <div className="h-full w-1/12 overflow-hidden rounded-full bg-indigo-600" />
              </div>
            </div>
          </div>
          <StackOverFlow />
          <Youtube />
        </div>
      </article>{" "}
    </>
  );
};

export default Article;
