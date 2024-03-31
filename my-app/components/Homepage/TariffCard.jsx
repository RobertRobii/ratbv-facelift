"use client";
import Image from "next/image";
import Link from "next/link";
import { IoCard } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa6";
import { useState } from "react";
import PopUp from "./PopUp";

export default function TariffCard({
  link,
  btnText,
  pText,
  title,
  image,
  isElevi,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleAppMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      className={`flex flex-col items-center justify-between border border-accent border-2 rounded-xl text-white shadow-lg md:text-left text-center ${
        !isOpen && "hover:scale-[1.01]"
      } hover:shadow-2xl transition ease-in-out md:w-96 w-72 min-h-80 p-5`}
    >
      <h3 className="text-xl mb-5">{title}</h3>
      {image ? (
        <Image
          src={image}
          width={80}
          height={80}
          className="object-cover mb-5 h-[80px]"
          alt="Imagine de prezentare"
        />
      ) : isElevi ? (
        <FaRegAddressCard className="h-[80px] w-[80px]" color="#00B906" />
      ) : (
        <IoCard className="h-[80px] w-[80px]" color="#00B906" />
      )}
      <div className="flex flex-col container">
        <p>{pText}</p>
        {link ? (
          <Link href={link} target="_blank" className="w-full">
            <button className="bg-accent rounded-xl transition hover:bg-accent/50 px-3 py-2 mt-5 w-full">
              {" "}
              {btnText}
            </button>
          </Link>
        ) : (
          <button
            className="bg-accent rounded-xl transition hover:bg-accent/50 px-3 py-2 mt-5 w-full"
            onClick={handleAppMenu}
          >
            {btnText}
          </button>
        )}
        {isOpen && <PopUp setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
}
