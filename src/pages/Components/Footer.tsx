"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="bg-clip-text text-center font-medium tracking-tight text-xl bg-black"
    >
      <footer className="w-full bg-black p-20 text-white font-sans">
        <span color="blue-gray" className="text-center font-normal">
          &copy; 2023 Vipin Bhatt
        </span>
      </footer>
    </motion.div>
  );
}
