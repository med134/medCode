"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { RiQuestionAnswerLine, RiStackOverflowLine } from "react-icons/ri";

const LastFooter = () => {
  const [art, setArticles] = useState([]);
  useEffect(() => {
    const stackOverFlow = () => {
      try {
        fetch(
          `https://api.stackexchange.com/2.3/questions?site=stackoverflow&sort=votes&order=desc`
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setArticles(data.items);
          });
      } catch (err) {
        console.log(err);
      }
    };
    stackOverFlow();
  });
  return (
    <>
      <section>
        <h2 className="text-2xl px-6 text-left mt-10 font-lexend underline font-semibold xs:mt-6 xs:text-xl md:mt-5 md:text-xl ">
          Newest Answers - Stack Overflow :
        </h2>
        <div className="bg-transparent p-8 dark:bg-dark flex mt-6 justify-between items-center font-lexend lg:flex-wrap sm:flex-col xs:flex-col">
          {art?.map((item, index) =>
            index < 4 ? (
              <article
                key={item.question_id}
                className="relative border dark:border-light ml-2 dark:bg-dark dark:text-white border-gray-300 h-48 w-64 bg-white p-6 text-gray-700 shadow-md md:mb-4 lg:mb-4 xs:w-full md:w-full"
              >
                <RiStackOverflowLine
                  fontSize={20}
                  className="absolute top-0 right-0 text-orange-400 m-2"
                />
                <p className="text-xs underline mb-3 w-full text-orange-400">
                  {item.tags.slice(0, 4)}...
                </p>
                <h1 className="text-sm">{item.title.slice(0, 70)}...</h1>
                <Link
                  href={item.link}
                  target="_blank"
                  className="absolute bottom-0 right-0 flex h-12 w-12 items-center justify-center bg-orange-400 text-white transition-all hover:w-16 hover:bg-orange-500"
                >
                  <BsArrowRight fontSize={24} />
                </Link>
                <div className="absolute bottom-0 left-0 ml-2 text-xs text-gray-600 mt-3 dark:text-white">
                  <p className="inline-flex px-3 font-bold">
                    <AiOutlineEye fontSize={18} /> {item.view_count}
                  </p>
                  <p className="inline-flex font-bold">
                    <RiQuestionAnswerLine fontSize={18} />
                    {item.answer_count}
                  </p>
                </div>
              </article>
            ) : null
          )}
        </div>
      </section>
    </>
  );
};

export default LastFooter;
