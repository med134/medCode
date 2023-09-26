import React from "react";

import AddNewArticle from "@/app/components/AddNewArticle";
export const metadata = {
  title: "medCode | Dashboard-Articles & blogs",
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
    canonical: `https://www.medcode.dev/dashboard/addArticles`,
    languages: {
      "en-us": `https://www.medcode.dev/en-us/dashboard/addArticles`,
    },
    types: {
      "application/rss+xml": "https://www.medcode.dev/rss",
    },
  },
};
export default function Page() {
  return (
    <div>
      <AddNewArticle />
    </div>
  );
}
