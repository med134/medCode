"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      router.push(`/?title=${query}`);
    } else {
      router.push("/");
    }
  };

  return (
    <header className="fixed flex w-full z-20 flex-col items-center bg-white dark:bg-dark px-4 py-4 shadow sm:flex-row md:h-20">
      <div className="flex w-full flex-col justify-between overflow-hidden transition-all sm:max-h-full sm:flex-row sm:items-center">
        <div className="relative ml-10 flex items-center justify-between rounded-md sm:ml-10">
          <input
            type="text"
            value={query}
            onChange={handleQueryChange}
            name="search"
            className="h-12 w-full rounded-md border border-gray-100 bg-gray-100 dark:border-light dark:bg-dark dark:text-light py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500"
            placeholder="Search for anything"
          />
          <button onClick={handleSearch}>
            <svg
              className="absolute left-2 block h-5 w-5 text-gray-400 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={11} cy={11} r={8} className="" />
              <line x1={21} y1={21} x2="16.65" y2="16.65" className="" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Search;
