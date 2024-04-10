import React from "react";
import cn from "../utils/cn";
import Spotlight from "./Spotlight";
import Navbar from "./Navbar";
import Details from "./Details";
import LayoutGrids from "./ImageLayout";

export default function Hero() {
  return (
    <div className="w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden">
      <Spotlight
        className="-top-40 left-20 md:left-60 md:-top-20"
        fill="#E2CBFF"
      />

      <div className="mt-6">
        <Navbar signup={true} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full pt-0 md:pt-0 flex h-screen md:items-center md:justify-center">
        <div>
          <h1 className="text-4xl md:text-7xl font-bold text-center">
            <span className="inset-0 bg-[conic-gradient(from_45deg_at_60%_40%,#E2CBFF_0%,#393BB2_70%,#E2CBFF_100%)] bg-clip-text text-transparent bg-opacity-100 ">
              Boost your ROI <br />
              with the industry-leading email marketing platform
            </span>
          </h1>
          <p className="mt-4 font-normal text-xl text-neutral-300 max-w-lg text-center mx-auto">
            Take your email marketing to the next level. Deliver your next big
            campaign and drive sales in less time with Mailchimp and always be
            in spotlight.
          </p>
          <div className="flex justify-center">
            <button className="mt-20 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-md font-semibold text-white backdrop-blur-3xl">
                Get started
              </span>
            </button>
          </div>
        </div>
      </div>
      <Details />
    </div>
  );
}
