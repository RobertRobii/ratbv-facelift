"use client";
import { useState, useEffect } from "react";
import FooterDesktop from "./FooterDesktop";
import FooterLaptop from "./FooterLaptop";
import FooterMobile from "./FooterMobile";

export default function Footer() {
  const [pageWidth, setPageWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app">
      <div className="footer flex flex-col">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 1440 199">
          <path
            d="m0,200l15,-30.03c15,-30.03 45,-90.1 75,-103.43c30,-13.58 60,20.21 90,26.65c30,6.69 60,-13.33 90,-20.02c30,-6.44 60,-0.19 90,20.02c30,19.83 60,53.62 90,63.44c30,10.2 60,-3.57 90,-20.02c30,-16.71 60,-36.73 90,-43.42c30,-6.44 60,-0.19 90,-13.33c30,-13.14 60,-46.93 90,-56.75c30,-10.2 60,3.57 90,10.01c30,6.69 60,6.69 90,13.39c30,6.44 60,20.21 90,43.36c30,23.15 60,56.94 90,53.37c30,-3.32 60,-43.36 90,-70.08c30,-26.47 60,-40.23 90,-36.67c30,3.32 60,23.34 75,33.35l15,10.01l0,120.13l-15,0c-15,0 -45,0 -75,0c-30,0 -60,0 -90,0c-30,0 -60,0 -90,0c-30,0 -60,0 -90,0c-30,0 -60,0 -90,0c-30,0 -60,0 -90,0c-30,0 -60,0 -90,0c-30,0 -60,0 -90,0c-30,0 -60,0 -90,0c-30,0 -60,0 -90,0c-30,0 -60,0 -90,0c-30,0 -60,0 -90,0c-30,0 -60,0 -90,0c-30,0 -60,0 -90,0c-30,0 -60,0 -90,0c-30,0 -60,0 -75,0l-15,0l0,0.02z"
            fill="#00B906"
            fillOpacity="1"
          />
        </svg>
        {pageWidth >= 1320 && <FooterDesktop />}
        {pageWidth < 1320 && pageWidth >= 970 && <FooterLaptop />}
        {pageWidth < 970 && <FooterMobile />}
      </div>
    </div>
  );
}
