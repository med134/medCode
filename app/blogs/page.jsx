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
  description: `Browse through MedCode collection of software engineering articles blogs and 
  tutorials and blogs on Next.js, React.js, java, javascript html ,css web development, and more. 
  Gain valuable insights and stay up-to-date with SEO tips for building a developer portfolio.`,
  keywords: [
    "Web Development",
    "Artificial Intelligence",
    " Programming Languages",
    "Software Engineering",
    "Front-end",
    "UI/UX Design",
    "Frameworks",
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
      en: `/en/blogs`,
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
            text="ALL MEN OF ACTION ARE DREAMERS"
            className="text-[66px] m-6 text-borderColor md:text-4xl xs:text-3xl"
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
