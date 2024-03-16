"use client";
import Image from "next/image";
import Link from "next/link";
import exitIcon from "@/public/svg/Exit_icon.svg";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NavbarMenu({ handleOpenMenu, pageWidth }) {
  const pathname = usePathname();

  const [searchbarText, setSearchbarText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`The line searched was: ${searchbarText}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector(".navbar-menu");
      if (menu && !menu.contains(event.target)) {
        handleOpenMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleOpenMenu]);

  return (
    <div className="fixed z-20 backdrop-filter backdrop-blur-sm w-screen h-screen">
      <div
        className={`navbar-menu ${
          pageWidth < 768
            ? "w-full"
            : "shadow-2xl border-solid border-l-4 border-[#00B906] w-[400px]"
        }`}
      >
        <div className="flex justify-between border-solid border-b border-[#00B906] pb-3">
          <h2 className="font-semibold text-2xl">Meniu</h2>
          <Image
            src={exitIcon}
            width={30}
            height="auto"
            onClick={handleOpenMenu}
            alt="Exit"
          />
        </div>
        <div className="flex flex-col gap-5 py-5">
          {pageWidth < 768 && (
            <form onSubmit={handleSubmit}>
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
                  className="bg-white text-sm rounded shadow-md focus:drop-shadow-md focus:outline-none focus:ring
                focus:ring-[#00B906] placeholder:italic w-full pl-9 pr-3 py-2"
                  placeholder="Caută linia dorita..."
                  type="text"
                  name="search"
                  value={searchbarText}
                  onChange={(e) => setSearchbarText(e.target.value)}
                />
              </label>
            </form>
          )}
          <ul className="space-y-3">
            <li className={pathname === "/" ? "selected" : ""}>
              <Link href="/" className="hover:text-[#00B906] text-lg">
                Acasa
              </Link>
            </li>
            <li className={pathname === "/lines/${id}" ? "selected" : ""}>
              <Link
                href={"/lines/${id}"}
                className="hover:text-[#00B906] text-lg"
              >
                Noutati
              </Link>
            </li>
            <li className={pathname === "/test" ? "selected" : ""}>
              <Link href="/test" className="hover:text-[#00B906] text-lg">
                Informatii Utile
              </Link>
            </li>
            <li className={pathname === "/contact" ? "selected" : ""}>
              <Link href="/contact" className="hover:text-[#00B906] text-lg">
                Despre Noi
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
