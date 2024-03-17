"use client";
import Image from "next/image";
import ratbvLogo from "@/public/images/RATBV_logo.png";
import menuIcon from "@/public/svg/Menu_icon.svg";
import NavbarMenu from "./NavbarMenu";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";
import { slideIn } from "@/variants";

export default function NavbarLaptop({ width, scrollY }) {
  const pathname = usePathname();

  const [searchbarText, setSearchbarText] = useState("");
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`The line searched was: ${searchbarText}`);
  };

  return (
    <>
      {openMenu === true && (
        <div className="fixed z-30 backdrop-filter backdrop-blur-sm w-screen h-screen" />
      )}
      <AnimatePresence>
        {openMenu === true && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideIn}
            className="fixed z-30 w-screen h-screen"
          >
            <NavbarMenu handleOpenMenu={handleOpenMenu} pageWidth={width} />
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`fixed w-full ${
          pathname === "/"
            ? scrollY > 20
              ? "fade-in"
              : "fade-out"
            : scrollY > 0
            ? "scrolled"
            : ""
        }`}
      >
        <div className="flex justify-between bg-transparent container mx-auto py-5">
          <div>
            <a href="/">
              <Image src={ratbvLogo} width={100} alt="RATBV Logo" />
            </a>
          </div>
          <div className="flex items-end">
            <form onSubmit={handleSubmit} className="self-center">
              <label className="relative block">
                <span className="absolute inset-y-0 z-10 flex items-center pl-2">
                  <svg
                    className="stroke-slate-400"
                    fill="none"
                    height="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" x2="16.65" y1="21" y2="16.65" />
                  </svg>
                </span>
                <input
                  className="bg-white text-sm rounded focus:drop-shadow-md focus:outline-none focus:ring
                focus:ring-[#00B906]/50 border border-slate-300 placeholder:italic mr-16 pl-9 pr-3 py-2"
                  placeholder="Caută linia dorita..."
                  type="text"
                  name="search"
                  value={searchbarText}
                  onChange={(e) => setSearchbarText(e.target.value)}
                />
              </label>
            </form>
            <Image
              src={menuIcon}
              width={30}
              className="self-center"
              onClick={handleOpenMenu}
              alt="Menu"
            />
          </div>
        </div>
      </div>
    </>
  );
}
