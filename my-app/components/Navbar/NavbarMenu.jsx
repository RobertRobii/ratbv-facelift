"use client";
import Image from "next/image";
import Link from "next/link";
import exitIcon from "@/public/svg/Exit_icon.svg";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function NavbarMenu({ handleOpenMenu, pageWidth }) {
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
      handleOpenMenu();
    } else if (isNaN(lineNumber)) {
      alert("Linia trebuie sa fie un numar!");
      setIsModalOpen((prev) => !prev);
      console.log(isModalOpen);
      setSearchbarText("");
    } else {
      router.push(`/lines/${lineNumber}`);
      handleOpenMenu();
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
            <li className={pathname === "/informatii" ? "selected" : ""}>
              <Link href="/informatii" className="hover:text-[#00B906] text-lg">
                Informatii Utile
              </Link>
            </li>
            <li className={pathname === "/tarife" ? "selected" : ""}>
              <Link href="/tarife" className="hover:text-[#00B906] text-lg">
                tarife
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
    </div>
  );
}
