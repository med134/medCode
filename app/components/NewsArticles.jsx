/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";


const NewsArticles = async () => {
  const [news, setNews] = useState();
  useEffect(() => {
    const fetchSeoData = async () => {
      const url =
        "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "1813cb997bmsh2a47f326c30f6a0p166fd4jsnd62e31fba852",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setNews(result.data.coins);
        console.log(result.data.coins);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSeoData();
  }, []);

  return (
    <>
      <h3 className="text-xl font-semibold text-gray-800 font-lexend rounded-lg mb-4 sm:text-sm">
        Best Hardware Wallets-Crypto Prices (USD)
      </h3>
      <div className="bg-white rounded-lg">
        {news?.map((post, index) =>
          index < 6 ? (
            <div
              key={post.uuid}
              className={`${
                index === 0
                  ? "bg-yellow-400 flex justify-between items-center p-4 w-full rounded-lg sm:p-4"
                  : "flex justify-between p-4 w-full rounded-lg sm:p-4"
              }`}
            >
              <Link
                href={post.coinrankingUrl}
                target="_blank"
                className="inline-flex items-center justify-center"
              >
                <span className="px-3 text-xl font-bold sm:text-sm">
                  {index + 1}
                </span>
                <img
                  className="rounded-[50%] w-8 h-8 xs:w-6 xs:h-6"
                  src={post.iconUrl}
                  alt="crypto_icons"
                />
                <h2 className="text-[13px] font-semibold text-gray-900 px-8 uppercase xl:text-sm xl:px-4 xs:px-2">
                  {post.name}
                </h2>
              </Link>
              <p className="text-[13px] font-semibold p-1 flex">
                {post.price.slice(0, 10)}{" "}
                <span className="text-yellow-400">$ </span>
              </p>
              <p
                className={`${
                  post.change < 0
                    ? "text-red-500 font-semibold text-[13px]"
                    : "text-green-500 font-semibold text-[13px]"
                }`}
              >
                {post.change} %
              </p>
            </div>
          ) : null
        )}
      </div>
    </>
  );
};

export default NewsArticles;
