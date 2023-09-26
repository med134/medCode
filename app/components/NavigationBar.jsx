import Link from "next/link";
import React from "react";

const NavigationBar = () => {
  return (
    <div
      role="group"
      className="flex justify-center py-2 items-center top-0 sm:grid sm:p-2"
    >
      <Link
        href="/dashboard/addTemplates"
        className={`px-8 py-4 text-gray-800 border-4 shadow-md border-transparent font-semibold text-xl text-center rounded-sm bg-slate-200 xs:px-1 md:text-sm md:py-2 xs:text-xs sm:mb-4 focus:border-b-red-500 focus:scale-105 `}
      >
        Add Your Templates or Components
      </Link>

      <Link
        href="/dashboard/addArticles"
        className={`px-8 py-4 border-4 text-gray-800 ml-6 shadow-md border-transparent	font-semibold text-xl text-center rounded-sm bg-slate-200 md:text-sm md:py-2 xs:px-1 xs:text-xs sm:ml-2 focus:border-b-red-500 focus:scale-105  `}
      >
        Add Your Articles or Blogs
      </Link>
    </div>
  );
};

export default NavigationBar;
