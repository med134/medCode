import React from "react";
import Layout from "../components/Layout";
import PostPage from "@/app/dashboard/addTemplates/page";
import NavigationBar from "../components/NavigationBar";

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
    canonical: `https://www.medcode.dev/dashboard`,
    languages: {
      "en-us": `https://www.medcode.dev/en-us/dashboard`,
    },
    types: {
      "application/rss+xml": "https://www.medcode.dev/rss",
    },
  },
};
export default function DashBoard() {
  return (
    <Layout className="p-8 w-full py-8 lg:p-4 xl:p-6 md:p-4 md:py-2 sm:p-1 sm:py-2">
      <NavigationBar/>
      <PostPage />
    </Layout>
  );
}
