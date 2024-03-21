"use client";
import { useState, useEffect } from "react";
// import { GrNext } from "react-icons/gr";
// import { GrPrevious } from "react-icons/gr";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 10000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      {/* <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="flex justify-center items-center rounded-full shadow bg-gray-200/[0.6] text-gray-800 hover:bg-white h-10 w-10"
        >
          <GrPrevious />
        </button>
        <button
          onClick={next}
          className="flex justify-center items-center rounded-full shadow bg-gray-200/[0.6] text-gray-800 ease-in hover:bg-white h-10 w-10"
        >
          <GrNext />
        </button>
      </div> */}
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${
                curr === i ? "p-0.5" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
