"use client";
import React from "react";
import { motion } from "framer-motion";

// Custom hook for scroll animation
const ScrollAnimationComponent = () => {
  return (
    <motion.div
      className=" w-screen h-screen z-1 bg-primary"
      initial={{ x: "100%", width: "100%" }}
      animate={{ x: "0%", width: "0%" }}
      exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
  );
};

export default ScrollAnimationComponent;
