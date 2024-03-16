"use client";
import { useState, useEffect } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarLaptop from "./NavbarLaptop";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  const [pageWidth, setPageWidth] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      {pageWidth >= 1024 && <NavbarDesktop scrollY={scrollY} />}
      {pageWidth < 1024 && pageWidth >= 768 && (
        <NavbarLaptop width={pageWidth} scrollY={scrollY} />
      )}
      {pageWidth < 768 && <NavbarMobile width={pageWidth} scrollY={scrollY} />}
    </nav>
  );
}
