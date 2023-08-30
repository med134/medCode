"use client";
import React from "react";
import Image from "next/image";
import { AiFillYoutube } from "react-icons/ai";
import Link from "next/link";
import YouTubeSubscribe from "../components/YoutubeSubscribe";
import Profile from '../images/bg.png'

const Youtube = ({ sub, video }) => {
  let channelid = "UC1dm-Rczjp52egzJTL__s8A";
  return (
    <div className="rounded-lg border min-w-full border-red-500 bg-white px-4 pt-8 pb-10 dark:bg-dark shadow-lg md:w-96">
      <div className="relative mx-auto w-36 rounded-full">
        <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-red-500 ring-2 ring-red-300 ring-offset-2" />
        <Image
          className="mx-auto h-auto w-full rounded-full border border-red-500"
          src={Profile}
          alt="icon_youtube_channel"
        />
      </div>
      <h1 className="items-center text-center text-xl mt-2 font-lexend font-semibold text-gray-900 dark:text-white">
        <AiFillYoutube
          className="inline-flex items-center  text-red-500 mr-2"
          fontSize={36}
        />{" "}
        Viva Code
      </h1>
     
      <p className="text-center text-sm leading-6 mt-3 text-gray-500 hover:text-gray-600 dark:text-white">
        Vivacode is a YouTube channel dedicated to coding and programming,{" "}
        <span className="text-red-500 font-semibold">Follow me</span>
      </p>
      <ul className="mt-3 rounded bg-gray-100 py-1 px-2 dark:bg-dark dark:border dark:border-light text-gray-600 font-lexend shadow-sm hover:text-gray-700 hover:shadow">
        <section className="c-share md:grid">
          <YouTubeSubscribe
            channelid={channelid}
            theme={"default"}
            layout={"full"}
            count={"default"}
          />
        </section>

        <div className="line bg-gray-500 mb-2"></div>
        <li className="text-center">
          <Link
            href="https://www.youtube.com/@VivaCode99/shorts"
            target="_blank"
            className="inline-flex text-white items-center rounded-lg mr-2 mb-2 px-2 py-2 bg-red-500 hover:bg-red-700"
          >
            <AiFillYoutube fontSize={28} className="mr-3" /> Start Watching
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Youtube;
