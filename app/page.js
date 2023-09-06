import HireMe from "./components/HireMe";
import Image from "next/image";
import Link from "next/link";
import Layout from "./components/Layout";
import { LinkArrow } from "./components/Icons";
import profilePic from "../app/images/med12.png";
import TransitionEffect from "./components/TransitionEffect";

export const metadata = {
  title: "medCode|freelance web developer",
  description: `Explore my world of web development through
   my dynamic portfolio website. Discover a showcase 
   of meticulously crafted websites and web applications,
    highlighting my expertise in HTML, CSS, JavaScript, with new frameworks,
     React.js ,Next.js, Vue.js, Angular and responsive UX Design. Immerse yourself
      in a collection of innovative projects, from e-commerce platforms and 
      interactive interfaces to sleek personal blogs. Experience the seamless
       fusion of creativity and functionality as you browse through my diverse
        range of projects and free code source and templates & components.
         Join me on this journey of code, UI ,UX design, and innovation`,
  alternates: {
    canonical: `/`,
    languages: {
      en: `/en`,
    },
  },
};
export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start">
        <Layout className="pt-0 md:pt-16 sm:pt-16 xs:p-10 xs:pt-18">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="med_dakir"
                className="w-[600px] mb-10 h-auto ml-10 md:inline-block md:w-full sm:ml-2"
                priority
              />
            </div>
            <div className="w-1/2 flex flex-col self-center lg:w-full lg:text-center sm:mt-[-50px]">
              <div className="container xs:mb-4">
                <div className="row">
                  <div className="col-md-12 text-left lg:text-center">
                    <h3 className="animate-charcter font-dance text-4xl md:text-center font-bold lg:text-center">
                      {" "}
                      Hi My Name is Med
                    </h3>
                  </div>
                </div>
              </div>
              <h5
                className="text-6xl text-left 
                xl:text-5xl lg:text-center lg:text=6xl md:text-5xl sm:text-3xl"
              >
                Turning Vision Into Reality With{" "}
                <span className="code">Code</span> And{" "}
                <span className="design"> Design.</span>
              </h5>
              <p className="my-4 text-base font-lexend md:text-sm sm:text-sm xs:text-sm">
                As a skilled web developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and blogs and free templates & components, showcasing my expertise in web
                development and mobile application.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="https://www.vivacode.dev/contactMe/"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
