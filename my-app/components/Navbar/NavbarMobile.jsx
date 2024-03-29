"use client";
import Image from "next/image";
import ratbvLogo from "@/public/images/RATBV_logo.png";
import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from "react";
import { usePathname } from "next/navigation";
import NavbarMenu from "./NavbarMenu";

import { motion, AnimatePresence } from "framer-motion";
import { slideIn } from "@/variants";

export default function NavbarMobile({ width, scrollY }) {
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
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
            ? scrollY > 0
              ? "scrolled"
              : "fixed z-20 backdrop-blur-lg bg-gray-200/[0.6] transition"
            : scrollY > 0
            ? "scrolled"
            : ""
        }`}
      >
        <div className="flex justify-between bg-transparent container mx-auto py-5">
          <div>
            <a href="/">
              <Image src={ratbvLogo} width={80} alt="RATBV Logo" />
            </a>
          </div>
          <div className="flex items-end">
            <TfiMenuAlt
              className="self-center cursor-pointer text-gray-700 hover:text-gray-600 transition w-[32px] h-[32px]"
              onClick={handleOpenMenu}
              alt="Meniu"
            />
          </div>
        </div>
      </div>
    </>
  );
}
