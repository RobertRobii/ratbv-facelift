"use client";
import Image from "next/image";
import ratbvLogo from "@/public/images/RATBV_logo.png";
import menuIcon from "@/public/svg/Menu_icon.svg";
import { useState } from "react";
import { usePathname } from "next/navigation";
import NavbarMenu from "./NavbarMenu";

export default function NavbarMobile({ width, scrollY }) {
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      {openMenu === true && (
        <NavbarMenu handleOpenMenu={handleOpenMenu} pageWidth={width} />
      )}
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
        <div className="flex justify-between bg-transparent py-5 px-10">
          <div>
            <a href="/">
              <Image src={ratbvLogo} width={80} alt="RATBV Logo" />
            </a>
          </div>
          <div className="flex items-end">
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
