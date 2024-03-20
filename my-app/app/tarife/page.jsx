"use client";

import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import DesktopTable from "@/components/tarife/DesktopTable";
import MobileTable from "@/components/tarife/MobileTable";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useInView } from "react-intersection-observer";

const Tarife = () => {
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let isMobile = width <= 768;

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <section className="container mx-auto pt-[100px] md:pt-[120px] pb-[100px]">
          <motion.h1 className="mx-auto md:mx-0 text-xl text-center mb-5 text-white bg-accent px-4 py-2 rounded-lg w-[250px]">
            Planul tarifar integrat
          </motion.h1>
          <p className="text-center md:text-left text-gray-500 mb-4 font-semibold text-justify">
            Valabil din 24.02.2023 pe traseele operate de RATBV S.A. din
            Municipiul Brasov si Zona Metropolitana Brasov
          </p>
          {isMobile ? <MobileTable /> : <DesktopTable />}
          <p className="text-center md:text-left text-gray-700 mt-10 font-semibold text-justify">
            Valabilitatea titlului de calatorie incepe de la momentul validarii
            sau achizitionarii lui, dupa caz.
          </p>
          <p className="text-center md:text-left text-gray-700 mt-2 text-justify">
            <span className="font-semibold">Transportul pe Linia 60 </span>este
            gratuit pentru calatorul/calatorii care detin "Tichet standard de
            parcare" sau "Abonament sejur 7 zile" eliberat la automatul/biroul
            de informatii aflat in parcarea publica din Poiana Mica Brasov.
          </p>
          <p className="text-center md:text-left text-gray-700 mt-2 text-justify">
            <span className="font-semibold">Taxa Card </span>Nenominal sau
            Reemitere Card Nenominal (in cazul pierderii/furtului/deteriorarii
            cardului): <span className="font-semibold">5 lei.</span>
          </p>
          <p className="text-center md:text-left text-gray-700 mt-2 font-semibold text-justify">
            Pachetul de 2 calatorii achizitionat de la sofer este disponibil pe
            toate liniile din zona metropolitana si pe liniile: 17B, 20, 25, 28,
            34B, 41, 60 si 100.
          </p>
        </section>
      )}
    </div>
  );
};

export default Tarife;
