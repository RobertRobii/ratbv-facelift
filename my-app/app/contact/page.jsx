"use client";

import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInformation from "@/components/Contact/ContactInformation";

const Contact = () => {
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
        <div>
          <section className="container mx-auto">
            <div className="pt-[60px] md:pt-[120px] pb-[100px]">
              <div className="flex flex-col-reverse xl:flex-row justify-between">
                <ContactForm />
                <ContactInformation />
              </div>
              <div className="mt-10 md:mt-0 px-[20px] md:px-0">
                <h1 className="text-lg mb-6 text-gray-700">
                  RATBV S.A. - operator de date cu caracter personal
                </h1>
                <p className="text-medium text-gray-500 mb-2 text-justify">
                  RATBV S.A. este înregistrată ca operator de date cu caracter
                  personal în Registrul de Evidență la Autoritatea Națională de
                  Supraveghere a prelucrării datelor cu caracter personal,
                  acționând în conformitate cu prevederile:
                </p>
                <p className="text-medium text-gray-500 text-justify">
                  - REGULAMENTULUI nr. 679 din 27 aprilie 2016 privind protecţia
                  persoanelor fizice în ceea ce priveşte prelucrarea datelor cu
                  caracter personal şi privind libera circulaţie a acestor date
                  şi de abrogare a Directivei 95/46/CE (Regulamentul general
                  privind protecţia datelor)
                </p>
                <p className="text-medium text-gray-500 text-justify">
                  - LEGII nr. 363 din 28 decembrie 2018 privind protecţia
                  persoanelor fizice referitor la prelucrarea datelor cu
                  caracter personal de către autorităţile competente în scopul
                  prevenirii, descoperirii, cercetării, urmăririi penale şi
                  combaterii infracţiunilor sau al executării pedepselor,
                  măsurilor educative şi de siguranţă, precum şi privind libera
                  circulaţie a acestor date
                </p>
                <p className="text-medium text-gray-500 text-justify">
                  - LEGII nr. 190 din 18 iulie 2018 privind măsuri de punere în
                  aplicare a Regulamentului (UE) 2016/679 al Parlamentului
                  European și al Consiliului din 27 aprilie 2016 privind
                  protecția persoanelor fizice în ceea ce privește prelucrarea
                  datelor cu caracter personal și privind libera circulație a
                  acestor date și de abrogare a Directivei 95/46/CE
                  (Regulamentul general privind protecția datelor)
                </p>
                <p className="text-medium text-gray-500 mt-6 mb-2">
                  Persoanele responsabile cu protecția datelor cu caracter
                  personal în cadrul RATBV S.A.:
                </p>
                <p className="text-medium text-gray-500">
                  Antonia Carla Simionescu -{" "}
                  <a
                    href="mailto:carla.simionescu@ratbv.ro"
                    className="text-accent hover:underline cursor-pointer"
                  >
                    carla.simionescu@ratbv.ro
                  </a>
                </p>
                <p className="text-medium text-gray-500">
                  Cristian Mandruta -{" "}
                  <a
                    href="mailto:cristian.mandruta@ratbv.ro"
                    className="text-accent hover:underline cursor-pointer"
                  >
                    cristian.mandruta@ratbv.ro
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Contact;
