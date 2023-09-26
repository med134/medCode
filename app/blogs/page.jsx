import React from "react";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import CardList from "../components/CardList";
import Card from "../components/Hero";
import FreeTemplates from "../components/FreeTemplates";

export const metadata = {
  title: "medCode-Blogs & Articles",
  description: `Browse through MedCode collection of software engineering articles blogs and debugging tutorials  Next.js, React.js, javascript html ,css web development`,
  keywords: [
    "best programming blogs",
    "programming blogs",
    " Programming Languages",
    "Software Engineering",
    "software development blogs",
    "UI/UX Design",
    "computer programming articles",
    "Cybersecurity programming",
    "Best Practices",
    "Web Design",
    "Mobile Development",
    "Learning Resources",
    "IDEs (Integrated Development Environments)",
    "Problem Solving",
    "Code Snippets",
  ],
  alternates: {
    canonical: `/blogs`,
    languages: {
      "en-us": `/en/blogs`,
    },
  },
  openGraph: {
    title: "medCode|Blogs",
    description: `Browse through MedCode collection of software engineering articles blogs and 
      tutorials.`,
    images: [
      {
        url: "/app/images/postera.png",
        width: "400",
        height: "300",
      },
    ],
  },
};
export async function getArticles() {
  const res = await fetch(`http://localhost:3000/api/articles`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const Page = async () => {
  const art = await getArticles();
  return (
    <Layout className="p-6 2xl:p-4 lg:p-4 md:p-2 xs:p-0">
      <AnimatedText
        className="text-[40px] m-6 text-borderColor md:text-4xl xs:text-2xl"
        text="Software Development Skills:Tips and Tricks for
            Success"
      />
      <Card />
      <CardList />
      <FreeTemplates />
    </Layout>
  );
};

export default Page;
