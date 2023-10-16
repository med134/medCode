"use client";
import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Card from "./Card";

const CardList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/articles");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setPosts(result);
    };
    fetchData();
  },[]);
  return (
    <section>
      <div className="grid grid-cols-3 gap-10 lg:grid-cols-4 p-16 lg:gap-16 lg:p-10 md:block sm:flex flex-wrap sm:p-14 xs:p-12 md:p-16">
        <div className="col-span-2 lg:col-span-2">
          <span className="text-xl space-x-2 font-bold text-gray-800 mb-4">
            Moore Posts...
          </span>
          <Card posts={posts} />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <span className="text-xl space-x-2 font-bold text-red-600 ">
            Trending On{" "}
            <span className="text-gray-900 font-bold text-2xl ml-2">
              DEV.to
            </span>
          </span>
          <SideBar />
        </div>
      </div>
    </section>
  );
};

export default CardList;
