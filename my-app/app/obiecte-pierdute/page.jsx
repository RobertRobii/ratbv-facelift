"use client";

import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <section className="container mx-auto pt-[120px]">
          <h1 className="text-xl mb-5 mx-auto md:mx-0 text-white bg-accent px-4 py-2 rounded-lg text-center w-[180px]">
            Obiecte pierdute
          </h1>
          <div className="mx-auto md:mx-0">
            <p className="mb-5 text-gray-500 text-xl">
              Obiectele, banii sau actele uitate sau pierdute în mijloacele de
              transport în comun sau în spațiile administrate de RATBV S.A.,
              respectiv stații ori capete de linie, pot fi recuperate de la
              BIROUL OBIECTE PIERDUTE. Acesta este situat la casieria din
              capătul de linie <span className="font-semibold">ROMAN</span>{" "}
              fiind deschis în zilele lucrătoare între orele
              <span className="font-semibold"> 06:00-22:00, </span>
              iar sâmbătă-duminică între orele{" "}
              <span className="font-semibold"> 07:00-21:00.</span>
            </p>
            <p className="mb-5 text-gray-500 text-xl">
              Sesizări sau solicitări de informații cu privire la obiecte
              pierdute în stații, terminale sau mijloace de transport în comun
              se pot obține la numerele de telefon{" "}
              <span className="font-semibold">0368 800 600, </span>la numarul de
              fax <span className="font-semibold">0268 335 660</span> sau la
              adresele de email{" "}
              <a
                className="font-semibold hover:underline"
                href="mailto:ratbv@ratbv.ro"
              >
                ratbv@ratbv.ro
              </a>{" "}
              si{" "}
              <a
                className="font-semibold hover:underline"
                href="mailto:comunicare@ratbv.ro"
              >
                comunicare@ratbv.ro
              </a>
              .
            </p>
            <p className="mb-5 text-gray-500 text-xl">
              Persoanele care găsesc un bun sau document în mijloacele de
              transport în comun îl pot preda conducătorilor auto, pentru a fi
              apoi depus la Biroul de obiecte pierdute.
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default page;
