"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import logo from "../images/logo3.png";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import Image from "next/image";
import Logo from "./Logo";
import { signOut, useSession } from "next-auth/react";
import ProfileDown from "./ProfileDown";

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
    h-[1px] inline-block  bg-dark
    absolute left-0 -bottom-0.5
    group-hover:w-full transition-[width] ease duration-300
    dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "" }) => {
  return (
    <Link
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
    >
      {title}
      <span
        className={`
          h-[1px] inline-block  bg-light
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300  
          dark:bg-dark`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className="w-full px-28 py-8 font-medium flex items-center justify-between sticky top-0 2xl:px-20
    dark:text-light bg-headerBg dark:font-lexend dark:bg-dark shadow-sm z-10 lg:px-16 md:px-12 sm:px-8 xs:w-full
    "
    >
      <button
        className="flex-col justify-between items-center hidden ml-[100%] lg:flex"
        onClick={handleClick}
      >
        <div className="flex-col">
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            } `}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            } `}
          ></span>
        </div>
        <Image
          src={logo}
          alt="website_logo"
          width={100}
          height={100}
          className={`w-12 h-12 rounded-full absolute sm:left-6 bottom-3 lg:left-12`}
        />
      </button>

      <div className="w-full flex justify-evenly items-center font-semibold lg:hidden">
        <nav className="flex items-center justify-evenly flex-wrap">
          <CustomLink href="/" title="Home" className="mr-4 uppercase" />
          <CustomLink href="/about" title="About" className="mx-4 uppercase" />
          <CustomLink
            href="/projects"
            title="Projects"
            className="mx-4 uppercase"
          />
          <CustomLink
            href="/blogs"
            title="Blogs"
            className="mx-4 uppercase"
            target="_blank"
          />
        </nav>
        <div>
          <Logo />
        </div>
        <nav className="flex items-center justify-between flex-wrap">
          <CustomLink
            href="/templates"
            title="Templates"
            className="mx-4 uppercase"
            target="_blank"
          />
          <CustomLink
            href="/books"
            title="Books"
            className="mx-4 uppercase"
            target="_blank"
          />

          <CustomLink
            href="/dashboard"
            title="Dashboard"
            className="mx-4 uppercase"
            target="_blank"
          />
          {session.status === "authenticated" && <ProfileDown />}
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-8 h-8 ml-8 flex items-center justify-center rounded-full p-1 transition-all duration-75 ease-linear delay-75 
    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
    `}
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon
                className={
                  "fill-dark transition-all duration-75 ease-linear delay-75 animate-spin"
                }
              />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[60vw] sm:min-w-[70vw] sm:h-min flex flex-col justify-between z-30 items-center fixed top-[50%] xs:top-[40%] left-2/4 -translate-x-1/2 -translate-y-1/2
    bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-8
    "
        >
          <nav className="flex items-center flex-col justify-center">
            <div className="flex items-center justify-center xs:w-full mb-1">
              <Image
                src={logo}
                alt="logo_website"
                className="w-20 dark:bg-white dark:rounded-xl dark:p-1"
              />
              <div className="block mt-2">
                <h2 className="font-Yeseva text-3xl text-light dark:text-dark">
                  edCode
                </h2>
                <p className="text-xs tracking-widest text-light dark:text-dark">
                  blog for programmers
                </p>
              </div>
            </div>
            <div className="line bg-gray-600 w-full h-1"></div>
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className="books"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className="projects"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/blogs"
              title="Blogs"
              className="blogs"
              toggle={handleClick}
            />

            <CustomMobileLink
              href="/templates"
              title="Template"
              className="templates"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/books"
              title="books"
              className="books"
              toggle={handleClick}
            />

            <CustomMobileLink
              href="/dashboard"
              title="Dashboard"
              className=""
              toggle={handleClick}
            />
            {session.status === "authenticated" && (
              <button
                className="text-medium mt-2 text-light dark:text-dark font-semibold "
                onClick={signOut}
              >
                Logout
              </button>
            )}
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://www.linkedin.com/in/mohammed-dakir/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-4 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@VivaCode99"
              target={"_blank"}
              className="w-6 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiFillYoutube size={34} className="fill-red-600" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/med_dakir/"
              target={"_blank"}
              className="w-6 mx-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <BsInstagram size={24} className="fill-pink-600" />
            </motion.a>
            <motion.a
              href="https://github.com/med134"
              target={"_blank"}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`w-8 h-8 ml-3 flex items-center transition-all hover:scale-75 justify-center rounded-full p-1
    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
    `}
            >
              {mode === "light" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default NavBar;
