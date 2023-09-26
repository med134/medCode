import Link from "next/link";
import React from "react";


const Category = () => {
  return (
    <aside className="w-full items-start rounded-lg border-2 border-purple-600 p-4 mt-4 mb-6 max-w-sm mx-auto lg:h-56">
      <h2 className="font-os text-lg font-bold">Categories</h2>
      <ul className="flex items-start flex-wrap mt-4">
        <li className="flex mx-1">
          <Link
            className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 dark:bg-purple text-purple-800"
            href="category/all"
          >
            <h2>all</h2>
          </Link>
        </li>
        <li className="flex mx-1">
          <Link
            className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 dark:bg-purple text-purple-800"
            href="category/react-js"
          >
            <h2>react js</h2>
          </Link>
        </li>
        <li className="flex mx-1">
          <Link
            className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 dark:bg-purple text-purple-800"
            href="category/redux"
          >
            <h2>redux</h2>
          </Link>
        </li>
        <li className="flex mx-1">
          <Link
            className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 dark:bg-purple text-purple-800"
            href="category/ui-design"
          >
            <h2>ui design</h2>
          </Link>
        </li>
        <li className="flex mx-1">
          <Link
            className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 dark:bg-purple text-purple-800"
            href="category/user-experience"
          >
            <h2>user experience</h2>
          </Link>
        </li>
        <li className="flex mx-1">
          <Link
            className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 dark:bg-purple text-purple-800"
            href="category/productivity"
          >
            <h2>productivity</h2>
          </Link>
        </li>
        <li className="flex mx-1">
          <Link
            className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 dark:bg-purple text-purple-800"
            href="category/gamme"
          >
            <h2>game</h2>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Category;
