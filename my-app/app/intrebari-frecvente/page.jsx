"use client";

import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import { Collapse } from "react-collapse";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import Image from "next/image";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [responses, setResponses] = useState([false, false, false]);
  const [isClicked, setIsClicked] = useState(false);

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
    setIsClicked((prev) => !prev);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <section className="container mx-auto pt-[120px]">
          <h1 className="text-xl mb-5 mx-auto md:mx-0 text-white bg-accent px-4 py-2 rounded-lg w-[200px]">
            Intrebari frecvente
          </h1>

          <div className="flex justify-between items-center mb-10">
            <div className="w-[350px] md:w-[450px] mt-10 mx-auto md:mx-0">
              <div className="text-gray-500 border border-accent rounded-lg pb-2 px-2 py-2">
                <div
                  onClick={() => handleResponse(0)}
                  className="relative cursor-pointer py-2"
                >
                  <p className="font-semibold mr-[65px]">
                    Ce se afiseaza pe panourile de informare din statii?
                  </p>
                  {isClicked ? (
                    <IoIosArrowDropupCircle
                      color="#00B906"
                      className="mr-6 w-5 h-5 absolute right-0 inset-y-0 my-auto"
                    />
                  ) : (
                    <IoIosArrowDropdownCircle
                      color="#00B906"
                      className="mr-6 w-5 h-5 absolute right-0 inset-y-0 my-auto"
                    />
                  )}
                </div>
                <Collapse isOpened={responses[0]}>
                  <p>
                    Panourile de informare din statii afișează programul
                    mijloacelor de transport care trec prin statia respectivă și
                    minutele rămase până la sosirea acestora. <br />{" "}
                    Informațiile afișate sunt modificate în timp real,
                    modificările intervenite pot fi datorare întarzierilor din
                    trafic sau unor cauze neprevăzute, independente de voința
                    noastră.
                  </p>
                </Collapse>
              </div>
              <div className="mt-4 text-gray-500 border border-accent rounded-lg pb-2 px-2 py-2">
                <div
                  onClick={() => handleResponse(1)}
                  className="relative cursor-pointer py-2"
                >
                  <p className="font-semibold mr-[65px]">
                    Cum se utilizează automatele de bilete?
                  </p>
                  {isClicked ? (
                    <IoIosArrowDropupCircle
                      color="#00B906"
                      className="mr-6 w-5 h-5 absolute right-0 inset-y-0 my-auto"
                    />
                  ) : (
                    <IoIosArrowDropdownCircle
                      color="#00B906"
                      className="mr-6 w-5 h-5 absolute right-0 inset-y-0 my-auto"
                    />
                  )}
                </div>
                <Collapse isOpened={responses[1]}>
                  <p>
                    Pentru procurarea unui titlu de călătorie sau încărcarea
                    cardului este necesar să selectați, pe panoul tactil al
                    automatului, operațiunea dorită (achiziționare titlu de
                    călătorie sau încărcare card) și apoi să introduceți banii
                    in fanta corespunzătoare.
                  </p>
                </Collapse>
              </div>
              <div className="mt-4 text-gray-500 border border-accent rounded-lg pb-2 px-2 py-2">
                <div
                  onClick={() => handleResponse(2)}
                  className="relative cursor-pointer py-2"
                >
                  <p className="font-semibold mr-[65px]">
                    Ce se întâmplă daca apare o disfuncționalitate în
                    funcționarea automatului în timpul operațiunilor?
                  </p>
                  {isClicked ? (
                    <IoIosArrowDropupCircle
                      color="#00B906"
                      className="mr-6 w-5 h-5 absolute right-0 inset-y-0 my-auto"
                    />
                  ) : (
                    <IoIosArrowDropdownCircle
                      color="#00B906"
                      className="mr-6 w-5 h-5 absolute right-0 inset-y-0 my-auto"
                    />
                  )}
                </div>
                <Collapse isOpened={responses[2]}>
                  <p>
                    In cazul în care în timpul operațiunii apare o
                    disfuncționalitate, vă rugăm să sunați la call center-ul
                    RATBV S.A.{" "}
                    <span className="font-semibold">0368 800 600</span> sau
                    scrieți un mail la adresa{" "}
                    <span className="font-semibold cursor-pointer hover:underline">
                      <a href="mailto:comunicare@ratbv.ro.">
                        comunicare@ratbv.ro.
                      </a>
                    </span>
                  </p>
                </Collapse>
              </div>
              <div className="mt-4 text-gray-500 border border-accent rounded-lg pb-2 px-2 py-2">
                <div
                  onClick={() => handleResponse(3)}
                  className="relative cursor-pointer py-2"
                >
                  <p className="font-semibold mr-[65px]">
                    Cum se verifică soldul pe cardul de transport?
                  </p>
                  {isClicked ? (
                    <IoIosArrowDropupCircle
                      color="#00B906"
                      className="mr-6 w-5 h-5 absolute right-0 inset-y-0 my-auto"
                    />
                  ) : (
                    <IoIosArrowDropdownCircle
                      color="#00B906"
                      className="mr-6 w-5 h-5 absolute right-0 inset-y-0 my-auto"
                    />
                  )}
                </div>
                <Collapse isOpened={responses[3]}>
                  <p>
                    Verificarea soldului de pe cardul de transport se poate face
                    în următoarele moduri:
                  </p>
                  <div className="mb-2">
                    <p className="mb-2 font-semibold">1. La validator:</p>
                    <p>
                      <span className="font-semibold">Pasul 1: </span>Selectati
                      butonul verde <span className="font-semibold">I</span> de
                      pe validator.
                    </p>
                    <p>
                      <span className="font-semibold">Pasul 2: </span>Apropiati
                      cardul de validator in locul indicat (asemenea unei
                      validari).
                    </p>
                    <p>
                      <span className="font-semibold">Pasul 3: </span>Asteptati
                      afisarea informatiilor
                    </p>
                  </div>
                  <div className="mb-2">
                    <p className="mb-2 font-semibold">
                      2. La casierii RATBV S.A.:
                    </p>
                    <p>
                      Pentru verificarea calatoriilor disponibile de pe card
                      este necesar ca centrul de vanzare sa fie dotat tehnic
                      corespounzator (cititor de card).
                    </p>
                  </div>
                  <div className="mb-2">
                    <p className="mb-2 font-semibold">
                      3. Automate de vanzare:
                    </p>
                    <p>
                      <span className="font-semibold">Pasul 1: </span>Se
                      introduce cardul in fanta destinata acestuia.
                    </p>
                    <p>
                      <span className="font-semibold">Pasul 2: </span>Se apasa
                      pe ecran.
                    </p>
                    <p>
                      <span className="font-semibold">Pasul 3: </span>Se
                      selecteaza optiunea{" "}
                      <span className="font-semibold">
                        reincarca/consultanta card.
                      </span>
                    </p>
                    <p>
                      <span className="font-semibold">Pasul 4: </span>Asteptati
                      citirea cardului pentru verificarea soldului.
                    </p>
                  </div>
                  <div className="mb-2">
                    <p className="mb-2 font-semibold">
                      4. Online pe portalul www.ratbv.ro:
                    </p>
                    <p>
                      <span className="font-semibold">Pasul 1: </span>Accesati
                      portalul{" "}
                      <a
                        className="font-semibold cursor-pointer hover:underline"
                        href="https://www.ratbv.ro"
                      >
                        www.ratbv.ro
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold">Pasul 2: </span>Selectati
                      <span className="font-semibold">
                        "Incarca sau consulta cardul online".
                      </span>
                    </p>
                    <p>
                      <span className="font-semibold">
                        Pasul 3: <span>Accesati contul de utilizator.</span>
                      </span>
                    </p>
                    <p>
                      <span className="font-semibold">Pasul 4: </span>Dupa
                      logare cu adresa de email si parola, selectati optiunea{" "}
                      <span className="font-semibold">"cardurile mele"</span>{" "}
                      pentru verificarea soldului (numarul de credite existente
                      pe cardul de transport).
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>
            <Image
              src="/images/faq-logo.png"
              width={300}
              height={300}
              className="hidden lg:block"
            ></Image>
          </div>
        </section>
      )}
    </div>
  );
};

export default Page;
