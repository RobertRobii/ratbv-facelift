"use client";

import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import { Collapse } from "react-collapse";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [responses, setResponses] = useState([false, false, false]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleResponse = (index) => {
    setResponses((prev) => {
      const updatedResponses = [...prev];
      updatedResponses[index] = !updatedResponses[index];
      return updatedResponses;
    });
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <section className="container mx-auto pt-[120px]">
          <h1 className="text-xl mb-5 text-white bg-accent px-4 py-2 rounded-lg w-[200px]">
            Intrebari frecvente
          </h1>

          <div className="w-[500px]">
            <div className="text-gray-500 border-b border-accent pb-2">
              <p
                onClick={() => handleResponse(0)}
                className="font-semibold pb-2 cursor-pointer"
              >
                Ce se afiseaza pe panourile de informare din statii?
              </p>
              <Collapse isOpened={responses[0]}>
                Panourile de informare din statii afișează programul mijloacelor
                de transport care trec prin statia respectivă și minutele rămase
                până la sosirea acestora. <br /> Informațiile afișate sunt
                modificate în timp real, modificările intervenite pot fi
                datorare întarzierilor din trafic sau unor cauze neprevăzute,
                independente de voința noastră.
              </Collapse>
            </div>
            <div className="mt-4 text-gray-500 border-b border-accent pb-2">
              <p
                onClick={() => handleResponse(1)}
                className="font-semibold pb-2 cursor-pointer"
              >
                Cum se utilizează automatele de bilete?
              </p>
              <Collapse isOpened={responses[1]}>
                Pentru procurarea unui titlu de călătorie sau încărcarea
                cardului este necesar să selectați, pe panoul tactil al
                automatului, operațiunea dorită (achiziționare titlu de
                călătorie sau încărcare card) și apoi să introduceți banii in
                fanta corespunzătoare.
              </Collapse>
            </div>
            <div className="mt-4 text-gray-500 border-b border-accent pb-2">
              <p
                onClick={() => handleResponse(2)}
                className="font-semibold pb-2 cursor-pointer"
              >
                Ce se întâmplă daca apare o disfuncționalitate în funcționarea
                automatului în timpul operațiunilor?
              </p>
              <Collapse isOpened={responses[2]}>
                In cazul în care în timpul operațiunii apare o
                disfuncționalitate, vă rugăm să sunați la call center-ul RATBV
                S.A. <span className="font-semibold">0368 800 600</span> sau
                scrieți un mail la adresa{" "}
                <span className="font-semibold cursor-pointer hover:underline">
                  <a href="mailto:comunicare@ratbv.ro.">comunicare@ratbv.ro.</a>
                </span>
              </Collapse>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Page;
