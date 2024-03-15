"use client";
import Image from "next/image";
import ratbvLogo from "@/public/images/RATBV_logo.png";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavbarDesktop({ scrollY }) {
  const pathname = usePathname();

  const [searchbarText, setSearchbarText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`The line searched was: ${searchbarText}`);
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
      <div className="flex justify-between bg-transparent py-5 px-32">
        <div>
          <a href="/">
            <Image src={ratbvLogo} width={100} alt="RATBV Logo" />
          </a>
        </div>
        <div className="flex items-end">
          <ul className="flex justify-between w-96 mr-24">
            <li className={pathname === "/" ? "selected" : ""}>
              <Link href="/" className="hover:text-[#00B906] px-1">
                Acasa
              </Link>
            </li>
            <li className={pathname === "/lines/${id}" ? "selected" : ""}>
              <Link href={"/lines/${id}"} className="hover:text-[#00B906]">
                Noutati
              </Link>
            </li>
            <li className={pathname === "/test" ? "selected" : ""}>
              <Link href="/test" className="hover:text-[#00B906]">
                Informatii Utile
              </Link>
            </li>
            <li className={pathname === "/contact" ? "selected" : ""}>
              <Link href="/contact" className="hover:text-[#00B906]">
                Despre Noi
              </Link>
            </li>
          </ul>
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
                className="bg-white text-sm rounded focus:drop-shadow-md focus:outline-none focus:ring
                focus:ring-[#00B906]/50 placeholder:italic pl-9 pr-3 py-2"
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
