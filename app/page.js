import HireMe from "./components/HireMe";
import Layout from "./components/Layout";
import TransitionEffect from "./components/TransitionEffect";
import "./globals.css";
import HomeComponent from "./components/HomeComponent";

export const metadata = {
  metadataBase: new URL("https://www.medcode.dev"),
  title: "medCode Web Development Company",
  description: `Learning programming is accessible for beginners through free web design and web development services. These courses introduce essential front-end developer skills and programming languages,
    `,
  keywords: [
    "Web Development",
    "how to learn programming",
    "computer programming",
    "computer programming software",
    "programming languages for beginners",
    "software programming courses",
    "python programming",
    "Artificial Intelligence",
    "best programming languages",
    "rust programming language",
    " Programming Languages",
    "best laptop for programming",
    "Software Engineering",
    "programming wallpaper",
    "swift programming language ",
    "Front-end",
    "UI/UX Design",
    "Frameworks",
    "Best Practices",
    "Web Design",
    "Mobile Development",
    "Learning Resources",
    "Problem Solving",
    "Code Snippets",
  ],
  referrer: "origin-when-cross-origin",
  authors: [
    { name: "med dakir" },
    { name: "medCode", url: "https://www.medcode.dev/" },
  ],
  creator: "Med Dakir",
  publisher: "Med Dakir",
  formatDetection: {
    email: "med@vivacode.dev",
    address: "312 Lovely Street, NY",
    telephone: false,
  },
  generator: "Next.js",
  applicationName: "MedCode",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: `/`,
    languages: {
      "en-us": `/en`,
    },
  },
};
export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start">
        <Layout className="pt-0 md:pt-16 sm:pt-16 xs:p-10 xs:pt-18">
          <HomeComponent />
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
