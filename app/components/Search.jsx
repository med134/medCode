"use client";
import React, { useState } from "react";
const Search = ({ getSearchResult }) => {
  const [query, setQuery] = useState("");
  console.log(query);
  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `http://localhost:3000/api/articles/search?query=${query}`,
      {
        cache: "no-store",
      }
    );
    const posts = await res.json();
    console.log(posts);
    getSearchResult(posts);
  };

  return (
    <header className="fixed flex w-full z-20 flex-col items-center bg-white dark:bg-dark px-4 py-4 shadow sm:flex-row md:h-20">
      <div className="flex w-full flex-col justify-between overflow-hidden transition-all sm:max-h-full sm:flex-row sm:items-center">
        <form
          onSubmit={handleSearch}
          className="relative ml-10 flex items-center justify-between rounded-md sm:ml-10"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            name="search"
            className="h-12 w-full rounded-md border border-gray-100 bg-gray-100 dark:border-light dark:bg-dark dark:text-light py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-950"
            placeholder="Search for anything"
          />
          <button type='submit' className="absolute inset-y-0 right-0 hover:text-dark bg-dark flex items-center px-4 text-gray-700 border border-gray-100 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900">
            <svg
              className="h-5 w-5 text-light hover:text-dark"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
              />
            </svg>
          </button>
        </form>
      </div>
    </header>
  );
};

export default Search;
