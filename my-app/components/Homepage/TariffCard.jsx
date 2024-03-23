"use client";
import Image from "next/image";
import Link from "next/link";
import { IoCard } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa6";
import { useState } from "react";

export default function TariffCard({
  link,
  btnText,
  pText,
  title,
  image,
  elevi,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-between border border-accent border-2 rounded-xl text-white shadow-lg md:w-96 w-60 min-h-80 p-5">
      <h3 className="text-xl mb-5">{title}</h3>
      {image ? (
        <Image
          src={image}
          width={80}
          height={80}
          className="object-cover mb-5 h-[80px]"
          alt="Imagine de prezentare"
        />
      ) : elevi ? (
        <FaRegAddressCard className="h-[80px] w-[80px]" color="#00B906" />
      ) : (
        <IoCard className="h-[80px] w-[80px]" color="#00B906" />
      )}
      <div className="flex flex-col container">
        <p>{pText}</p>
        {link ? (
          <button className="bg-accent rounded-xl transition hover:bg-accent/50 px-3 py-2 mt-5 w-full">
            <Link href={link} target="_blank" className="w-full">
              {btnText}
            </Link>
          </button>
        ) : (
          isOpen && (
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
          )
        )}
      </div>
    </div>
  );
}
