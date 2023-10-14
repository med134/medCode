"use client";
import React, { useState } from "react";
import Select from "react-select";
import { getCategory } from "./FetchData";

const Categories = async ({filterPosts}) => {
  const [selected, setSelected] = useState("");

  const categories = await getCategory();
  
  return (
    <div>
      <h1 className="text-2xl px-12 py-8 font-bold text-gray-800">
        Categories
      </h1>
      <Select
        className="w-full px-8"
        value={selected}
        onChange={handleChange}
        options={categories}
      />
    </div>
  );
};

export default Categories;
