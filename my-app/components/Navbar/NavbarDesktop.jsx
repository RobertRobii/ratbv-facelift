"use client";

import Image from "next/image";
import ratbvLogo from "@/public/images/RATBV_logo.png";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

import { useRouter } from "next/navigation";

export default function NavbarDesktop({ scrollY }) {
  const pathname = usePathname();
  const router = useRouter();

  const [searchbarText, setSearchbarText] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Lista de linii speciale
    const specialLines = ["A1", "5M", "17B", "20B", "23B", "34B", "41B"];

    // Transformăm textul introdus de utilizator în majuscule
    const lineNumber = searchbarText.toUpperCase();

    if (specialLines.includes(lineNumber)) {
      router.push(`/lines/${lineNumber}`);
    } else if (isNaN(lineNumber)) {
      toast.error(`${searchbarText} nu este o linie valida!`);
      setSearchbarText("");
    } else {
      router.push(`/lines/${lineNumber}`);
    }
  };

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

  return (
    <div
      className={`fixed w-full z-10 ${
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
            <Image src={ratbvLogo} width={100} alt="RATBV Logo" />
          </a>
        </div>
        <div className="flex items-center">
          <ul className="flex justify-between w-[460px] mr-24">
            <li className={pathname === "/" ? "selected" : ""}>
              <Link
                href="/"
                className="hover:text-[#00B906] px-1 transition-all duration-300"
              >
                Acasa
              </Link>
            </li>
            <li className={pathname === "/noutati" ? "selected" : ""}>
              <Link
                href={"/noutati"}
                className="hover:text-[#00B906] transition-all duration-300"
              >
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
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md hover:text-[#00B906] transition-all duration-300"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Informatii utile
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
                        className=" block px-4 py-2 hover:text-[#00B906] hover:bg-gray-100 transition-all duration-300"
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
              <Link
                href="/tarife"
                className="hover:text-[#00B906] transition-all duration-300"
              >
                Tarife
              </Link>
            </li>
            <li className={pathname === "/contact" ? "selected" : ""}>
              <Link
                href="/contact"
                className="hover:text-[#00B906] transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
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
                className="bg-white text-sm border border-slate-300 rounded focus:drop-shadow-md focus:outline-none focus:ring
                focus:ring-[#00B906]/50 rounded-lg pl-9 pr-3 py-2"
                placeholder="Caută linia dorita..."
                type="text"
                name="search"
                value={searchbarText}
                onChange={(e) => setSearchbarText(e.target.value)}
              />
            </label>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
