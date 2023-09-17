import React from "react";
import AddNewPost from "../components/AddNewPost";


export const metadata = {
  title: "medCode | Dashboard",
  description: `Elevate Your Web Development with Free Tailwind CSS Templates & Components & code source Our meticulously designed frontend dashboard templates and components`,
  keywords: [
    "Web Development",
    "tailwind css free components",
    "tailwind css free components",
    "frontend templates",
    "how to learn programming",
    "free components sketchup ",
    "python programming",
    "django frontend templates",
    "Artificial Intelligence",
    "best programming languages",
    "rust programming language",
    " Programming Languages",
    "Software Engineering",
    "tailwind css",
    "free templates",
    "free components",
    "bootstrap",
    "free code",
    "Front-end",
    "UI/UX Design",
    "Frameworks",
    "Best Practices",
    "Web Design",
    "Learning Resources",
    "Code Snippets",
  ],
  alternates: {
    canonical: `/dashboard`,
    languages: {
      "en-us": `/en/dashboard`,
    },
  },
};
const Dashboard = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-lexend text-gray-700 mt-6 md:text-2xl text-center sm:text-sm xs:text-[10px]">
        Free Templates and Components Dashboard
      </h1>
      <AddNewPost />
    </div>
  );
};

export default Dashboard;
