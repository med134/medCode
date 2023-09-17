import React from "react";
import { Suspense } from "react";
import AnimatedText from "../components/AnimatedText";
import Blogs from "../components/Blogs";
import Loading from "../loading";
import { FirstBlog } from "../components/FirstBlog";
import Article from "../components/Article";
import Layout from "../components/Layout";

export const metadata = {
  title: "medCode|Blogs & Articles",
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
      "en-US": `/en/blogs`,
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
const Page = () => {
  return (
    <>
      <main className="dark:bg-dark">
        <Layout className="p-6 2xl:p-4 lg:p-4 md:p-2 xs:p-0">
          <AnimatedText
            className="text-[40px] m-6 text-borderColor md:text-4xl xs:text-3xl"
            text="Software Development Skills:Tips and Tricks for
            Success"
          />
          <FirstBlog />
          <div className="h-[1px] w-10/12 text-center bg-gray-400 ml-24"></div>
          <Suspense fallback={<Loading />}>
            <Blogs />
            <Article />
          </Suspense>
        </Layout>
      </main>
    </>
  );
};

export default Page;
