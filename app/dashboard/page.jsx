import React from "react";
import AddNewPost from "../components/AddNewPost";
import Layout from "../components/Layout";

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
    <Layout className="p-8 py-8 sm:p-4 sm:py-4">
      <h1 className="text-xl font-lexend text-gray-700 p-6">
        Free Templates and Components Dashboard
      </h1>
      <AddNewPost />
    </Layout>
  );
};

export default Dashboard;
