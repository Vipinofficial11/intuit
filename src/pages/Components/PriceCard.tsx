import React from "react";

interface Price {
  actual: string;
  discount: string;
}

function PriceCard({
  cards,
}: {
  cards: {
    title: string;
    description: string;
    price: Price;
    pointers: string[];
  }[];
}) {
  return (
    <div className="flex flex-row gap-4 mt-20 justify-center flex-wrap w-full h-full">
      {cards?.map((item, idx) => (
        <div
          key={idx}
          className="rounded-2xl text-white w-[350px] h-[750px] p-4 overflow-hidden bg-black border-2 border-white/80 relative hover:translate-y-2 hover:shadow-[8px_6px_15px_1px_rgba(247,247,247,0.65)]"
        >
          <h1 className="text-zinc-100 text-2xl font-bold tracking-wide mt-4 font-serif">
            {item.title}
          </h1>
          <p className="mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm font-sans max-w-72">
            {item.description}
          </p>
          <div className="mt-6 tracking-wide leading-relaxed font-sans">
            <span className="font-serif text-xl text-zinc-100 ">Starts at</span>
            <br />
            <span className="text-zinc-400 text-sm underline underline-offset-[-5px]">
              ₹{item.price.actual}
            </span>
            <br />
            <span className="text-zinc-100 text-xl font-bold font-sans">
              ₹{item.price.discount}
            </span>
            <br />
            <span className="text-sm">/month for 12 months*</span>
          </div>
          <div className="mt-10 mb-20 h-64 text-zinc-100 tracking-wide leading-relaxed text-sm font-sans max-w-72">
            <ul>
              {item.pointers.map((points) => (
                <div key={points} className="flex flex-row mt-2 my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>

                  <li className="border-b-2 border-zinc-400 border-dotted border-spacing-6 text-md font-sans">
                    {points}
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <button className="ml-20 px-6 py-2 rounded-full relative bg-slate-950 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600 hover:scale-105">
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-[#E2CBFF] to-transparent" />
            <span className="relative">Buy now</span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default PriceCard;
