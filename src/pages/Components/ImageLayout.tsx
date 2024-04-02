"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./LayoutGrid";
import { motion } from "framer-motion";

export function LayoutGrids() {
  return (
    <div className="h-screen py-20 w-full relative bg-black" id="resources">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.3,
          ease: "easeIn",
        }}
        className="text-zinc-100 text-2xl md:text-4xl font-bold mt-4 text-center font-serif"
      >
        We’re the #1 email marketing and automations platform* for a reason
      </motion.h2>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        Mailchimp AI can be the next expert marketer on your team
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Mailchimp analyzes hundreds of millions of data points and then gives
        you suggestions for crafting better-performing emails. Generate
        professionally written, on-brand marketing emails with the press of a
        button.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        Work with Mailchimp Experts to deliver your next big campaign
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Bring your questions to our community of experts and find the perfect
        advice for your campaigns. Dedicated Customer Success services are also
        available.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        Get up and running easily with personalized onboarding servicess
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Get guided support from an onboarding specialist. It’s live, hands-on,
        and already included with your subscription.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        Easy for beginners, powerful for sophisticated marketers
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our email marketing platform makes it easy for marketers in any type of
        business to send professional, engaging marketing emails. From drag and
        drop editors to powerful automations and developer APIs, Mailchimp is
        built to help you sell more—no matter the complexity of your business.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://eep.io/images/yzco4xsimv0y/1apY03Az8esKFJGsq21KQ0/a6bc2a9d2ff5d22c5c77960c4a946c48/AI_Assist_image.png?w=1280&fm=avif&q=60",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://eep.io/images/yzco4xsimv0y/1MFoFlMNYOcuWg7MbJsBlK/d7c1aaf6a2e8c49d35e91be000857d95/mailchimp-experts.png?w=1280&fm=avif&q=60",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://eep.io/images/yzco4xsimv0y/3Kadn6d4faTgjMBxvI0XAb/d68c00bee821bc29457da57b85b710cf/onboarding-services.png?w=1280&fm=avif&q=60",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://eep.io/images/yzco4xsimv0y/7KbHRbQYShVXTba6qjNHHI/d17ae527704447307eb9003ff053dda6/email-builder.png?w=1280&fm=avif&q=60",
  },
];
