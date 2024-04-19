"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="bg-clip-text text-center tracking-tight text-md bg-black">
      <footer className="w-full bg-black p-20 text-white font-sans">
        <span color="blue-gray" className="text-center font-normal">
          &copy; 2023 Vipin Bhatt
        </span>
      </footer>
    </div>
  );
}
