"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BusLines = () => {
  const data = [
    {
      number: "1",
      from: "Livada Postei",
      to: "Triaj",
    },
    {
      number: "2",
      from: "Rulmentul",
      to: "Livada Postei",
    },
    {
      number: "2B",
      from: "Rulmentul (Tractorul Nou)",
      to: "Livada Postei",
    },
    {
      number: "3",
      from: "Valea Cetatii",
      to: "Stadionul Tineretului",
    },
    {
      number: "4",
      from: "Gara Brasov",
      to: "Pe Tocile",
    },
    {
      number: "5",
      from: "Roman",
      to: "Stadionul Municipal",
    },
    {
      number: "5M",
      from: "Stadionul Municipal",
      to: "Magurele",
    },
    {
      number: "6",
      from: "Saturn",
      to: "Livada Postei",
    },
    {
      number: "7",
      from: "Roman",
      to: "Rulmentul",
    },
    {
      number: "8",
      from: "Saturn",
      to: "Rulemntul",
    },
    {
      number: "9",
      from: "Rulmentul",
      to: "Stadionul Municipal",
    },
    {
      number: "10",
      from: "Valea Cetatii",
      to: "Triaj",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll((prev) => !prev);
  };

  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let isMobile = width <= 768;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="flex flex-wrap justify-between gap-x-10 gap-y-10 mb-10">
          {data
            .slice(0, showAll ? data.length : isMobile ? 6 : 9)
            .map((dataItem) => (
              <Link href={`/lines/${dataItem.number}`} key={dataItem.number}>
                <div className="flex flex-col lg:flex-row justify-center items-center text-center text-white border w-[140px] h-[200px] lg:w-[380px] lg:h-[100px] rounded-lg bg-accent py-3 cursor-pointer hover:scale-105 hover:bg-white hover:text-accent hover:border-accent transition-all duration-300">
                  <h1 className="bg-white px-3 py-1 rounded-lg text-accent font-semibold mr-0 lg:mr-2 lg:ml-3 mb-2 lg:mb-0 text-xl border border-accent">
                    {dataItem.number}
                  </h1>
                  <h1 className="font-semibold text-xl w-[150px]">
                    {dataItem.from}
                  </h1>
                  <h1 className="font-semibold text-xl lg:mx-2">→</h1>
                  <h1 className="font-semibold text-xl w-[150px]">
                    {dataItem.to}
                  </h1>
                </div>
              </Link>
            ))}
        </div>
        {!showAll && (
          <div className="absolute bottom-0 w-full h-1/4 md:h-2/4 bg-gradient-to-b from-transparent to-white"></div>
        )}
      </div>
      {data.length > 6 && (
        <button
          className="bg-accent border hover:bg-white hover:border-accent hover:text-accent text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
          onClick={handleClick}
        >
          {showAll ? "Vezi mai puține linii" : "Vezi toate liniile"}
        </button>
      )}
    </div>
  );
};

export default BusLines;
