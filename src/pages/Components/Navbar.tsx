import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

function Navbar({ signup }: { signup: boolean }) {
  const router = useRouter();
  const [id, setId] = useState<String>();
  const sectionRef = useRef<HTMLDivElement>(null);
  const handleOnClick = () => {
    router.push("/");
  };

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [id]);

  // return <div ref={sectionRef} id={id} />;

  return (
    <nav className="w-full flex flex-row justify-end mt-10">
      <div>
        <div className="mx-4">
          <a
            href="#solutions"
            className="text-white font-semibold px-6 py-2 mr-2 hover:rounded-3xl hover:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_10%,#E2CBFF_30%)] hover:text-black hover:font-bold hover:animate-scaling"
            onClick={() => setId("solutions")}
          >
            Solutions and Services
          </a>
          <a
            href="#resources"
            className="text-white font-semibold px-6 py-2 mr-2 hover:rounded-3xl hover:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_10%,#E2CBFF_30%)] hover:text-black hover:font-bold hover:animate-scaling"
            onClick={() => setId("resources")}
          >
            Resources
          </a>
          <a
            href="#price"
            className="text-white font-semibold px-6 py-2 mr-2 hover:rounded-3xl hover:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_10%,#E2CBFF_30%)] hover:text-black hover:font-bold hover:animate-scaling"
            onClick={() => setId("price")}
          >
            Pricing
          </a>
          {/* <button
            className="px-6 py-2 rounded-full relative bg-slate-950 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600 hover:animate-scaling"
            onClick={handleOnClick}
          >
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-[#E2CBFF] to-transparent" />
            <span className="relative">Login</span>
          </button> */}
          {signup && (
            <button
              className="px-6 py-2 ml-2 rounded-full relative bg-slate-950 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600 hover:animate-scaling"
              onClick={handleOnClick}
            >
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-[#E2CBFF] to-transparent" />
              <span className="relative">Sign up</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
