"use client";

import Image from "next/image";
import ratbvLogo from "@/public/images/RATBV_logo.png";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function NavbarDesktop({ scrollY }) {
  const pathname = usePathname();
  const router = useRouter();

  const [searchbarText, setSearchbarText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Lista de linii speciale
    const specialLines = ["A1", "5M", "17B", "20B", "23B", "34B", "41B"];

    // Transformăm textul introdus de utilizator în majuscule
    const lineNumber = searchbarText.toUpperCase();

    if (specialLines.includes(lineNumber)) {
      router.push(`/lines/${lineNumber}`);
    } else if (isNaN(lineNumber)) {
      alert("Linia trebuie sa fie un numar!");
      setIsModalOpen((prev) => !prev);
      console.log(isModalOpen);
      setSearchbarText("");
    } else {
      router.push(`/lines/${lineNumber}`);
    }
  };

  return (
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
        <div className="flex items-center">
          <ul className="flex justify-between w-96 mr-24">
            <li className={pathname === "/" ? "selected" : ""}>
              <Link
                href="/"
                className="hover:text-[#00B906] px-1 transition-all duration-300"
              >
                Acasa
              </Link>
            </li>
            <li className={pathname === "/lines/${id}" ? "selected" : ""}>
              <Link
                href={"/noutati"}
                className="hover:text-[#00B906] transition-all duration-300"
              >
                Noutati
              </Link>
            </li>
            <li className={pathname === "/test" ? "selected" : ""}>
              <Link
                href="/informatii"
                className="hover:text-[#00B906] transition-all duration-300"
              >
                Informatii Utile
              </Link>
            </li>
            <li className={pathname === "/contact" ? "selected" : ""}>
              <Link
                href="/contact"
                className="hover:text-[#00B906] transition-all duration-300"
              >
                Despre Noi
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
    </div>
  );
}
