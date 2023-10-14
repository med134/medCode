"use client";
import React, { useEffect, useState } from "react";
import { getArticles } from "./FetchData";
const Categories = () => {
  const [cate, setCate] = useState();

  const filterArticles = () => {
    const result = categories.filter((item) => {
      return item.category === "Productivity";
    });
    setCate(result);
  };
  useEffect(()=>{
    
  })
  return (
    <>
      <div>
        {cate.map((item) => {
          <div key={item._id}>
            <h1>{item.title}</h1>
            <span>{item.category}</span>
          </div>;
        })}
      </div>
      <button onClick={filterArticles}>Filter</button>
    </>
  );
};

export default Categories;
