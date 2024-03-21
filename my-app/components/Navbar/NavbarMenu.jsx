"use client";
import Image from "next/image";
import Link from "next/link";
import exitIcon from "@/public/svg/Exit_icon.svg";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function NavbarMenu({ setOpenMenu, handleOpenMenu, pageWidth }) {
  const pathname = usePathname();
  const router = useRouter();

  const [searchbarText, setSearchbarText] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const lines = [
      "A1",
      "1",
      "2",
      "2B",
      "3",
      "4",
      "5",
      "5M",
      "6",
      "7",
      "8",
      "9",
      "10",
      "14",
      "15",
      "16",
      "17",
      "17B",
      "18",
      "20",
      "20B",
      "21",
      "22",
      "23",
      "23B",
      "24",
      "25",
      "28",
      "29",
      "31",
      "32",
      "33",
      "34",
      "34B",
      "35",
      "36",
      "37",
      "40",
      "41",
      "41B",
      "50",
      "52",
      "53",
      "54",
      "60",
      "100",
      "110",
      "120",
      "130",
      "131",
      "140",
      "210",
      "220",
      "310",
      "320",
      "410",
      "411",
      "412",
      "420",
      "511",
      "520",
      "540",
      "610",
      "611",
      "612",
      "620",
      "710",
      "711",
      "810",
    ];

    const lineNumber = searchbarText.toUpperCase();

    if (lines.includes(lineNumber)) {
      router.push(`/lines/${lineNumber}`);
      handleOpenMenu();
    } else if (isNaN(lineNumber)) {
      toast.error("Incearca o linie valida!");
      setSearchbarText("");
    }
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

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Adaugă ascultătorul de evenimente la document
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Înlătură ascultătorul de evenimente la document atunci când componenta este demontată
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleInformatiiUtileClick = (e) => {
    // Oprim propagarea evenimentului de click
    e.stopPropagation();
    // Deschidem sau închidem meniul Informatii utile
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`navbar-menu ${
          pageWidth < 768
            ? "w-full"
            : "shadow-2xl border-solid border-l-4 border-[#00B906] w-[400px]"
        }`}
      >
        <div className="flex justify-between border-solid border-b border-[#00B906] pb-3">
          <h2 className="font-semibold text-2xl text-gray-700">Meniu</h2>
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
            <>
              <form onSubmit={handleSearchSubmit}>
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
                    className="bg-white text-[16px] rounded shadow-md focus:drop-shadow-md focus:outline-none focus:ring
                focus:ring-[#00B906] rounded-lg w-full pl-9 pr-3 py-2"
                    placeholder="Caută linia dorita..."
                    type="text"
                    name="search"
                    value={searchbarText}
                    onChange={(e) => setSearchbarText(e.target.value)}
                  />
                </label>
              </form>
              <button
                onClick={handleSearchSubmit}
                className="bg-transparent rounded-lg py-2 w-[100px] mx-auto text-accent border border-accent hover:bg-accent hover:text-white transition-all duration-200"
              >
                Search
              </button>
            </>
          )}
          <ul className="space-y-3 text-gray-700" onClick={handleOpenMenu}>
            <li className={pathname === "/" ? "selected" : ""}>
              <Link href="/" className="hover:text-[#00B906] text-lg">
                Acasa
              </Link>
            </li>
            <li className={pathname === "/noutati" ? "selected" : ""}>
              <Link href={"/noutati"} className="hover:text-[#00B906] text-lg">
                Noutati
              </Link>
            </li>
            <li
              className={pathname === "/informatii" ? "selected" : ""}
              ref={ref}
            >
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="text-lg inline-flex w-full justify-center gap-x-1.5 rounded-md hover:text-[#00B906] transition-all duration-300"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={handleInformatiiUtileClick}
                  >
                    Informatii utile
                    {/* <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg> */}
                  </button>
                </div>
                {isOpen && (
                  <div
                    className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    <div role="none">
                      <Link
                        href="/informatii-turisti"
                        className="block px-4 py-2 hover:text-[#00B906] hover:bg-gray-100 transition-all duration-300"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-0"
                        onClick={() => setIsOpen(false)}
                      >
                        Informatii turisti
                      </Link>
                      <Link
                        href="/obiecte-pierdute"
                        className=" block px-4 py-2 hover:text-[#00B906] hover:bg-gray-100 transition-all duration-300"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Obiecte pierdute
                      </Link>
                      <Link
                        href="/intrebari-frecvente"
                        className=" block px-4 py-2 hover:text-[#00B906] hover:bg-gray-100 transition-all duration-300"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-2"
                        onClick={() => setIsOpen(false)}
                      >
                        Intrebari frecvente
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </li>
            <li className={pathname === "/tarife" ? "selected" : ""}>
              <Link href="/tarife" className="hover:text-[#00B906] text-lg">
                Tarife
              </Link>
            </li>
            <li className={pathname === "/contact" ? "selected" : ""}>
              <Link href="/contact" className="hover:text-[#00B906] text-lg">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
