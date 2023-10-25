import React from "react";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Card from "../components/Hero";
import CardList from "../components/CardList";
import MakeFree from "../components/MakeFree";
import Article from "../components/Article";

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

const Page = async () => {
  return (
    <Layout className="p-6 2xl:p-4 lg:p-4 md:p-2 xs:p-0">
      <AnimatedText
        className="text-[40px] m-6 text-borderColor md:text-4xl xs:text-2xl"
        text="Software Development Skills:Tips and Tricks for Success"
      />
      <Card />
      <CardList />
      <MakeFree />
      <Article/>
    </Layout>
  );
};
export default Page;
