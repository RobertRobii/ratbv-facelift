import { PiGarageFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactInformation = () => {
  return (
    <div className="text-sm md:text-lg px-[20px] xl:pl-[100px] mt-10 xl:mt-0">
      <h1 className="text-xl mb-5 text-white text-center bg-accent px-4 py-2 rounded-lg w-[200px] mx-auto xl:ms-0">
        Informatii contact
      </h1>
      <div className="flex flex-col xl:flex-row justify-center xl:justify-start items-center gap-x-2 mb-5">
        <div className="flex items-center gap-x-2 mb-2 md:mb-0">
          <PiGarageFill size={20} color="#00B906" />
          <p>Nume: </p>
        </div>
        <p>RATBV S.A.</p>
      </div>
      <div className="flex flex-col xl:flex-row justify-center xl:justify-start items-center gap-x-2 mb-5">
        <div className="flex items-center gap-x-2 mb-2 md:mb-0">
          <FaLocationDot size={20} color="#00B906" />
          <p>Adresa:</p>
        </div>
        <p>Str. Harmanului nr. 49, Brasov, Romania</p>
      </div>
      <div className="flex flex-col xl:flex-row justify-center xl:justify-start items-center gap-x-2 mb-5">
        <div className="flex items-center gap-x-2 mb-2 md:mb-0">
          <FaCalendarAlt size={18} color="#00B906" />
          <p>Program Registratura: </p>
        </div>
        <p> (luni - vineri) 8:00 - 13:00</p>
      </div>
      <div className="flex flex-col xl:flex-row justify-center xl:justify-start items-center gap-x-2 mb-5">
        <div className="flex items-center gap-x-2 mb-2 md:mb-0">
          <FaCalendarAlt size={18} color="#00B906" />
          <p>Program Administratie:</p>
        </div>
        <p> (luni - vineri) 8:00 - 16:00</p>
      </div>
      <div className="flex flex-col xl:flex-row justify-center xl:justify-start items-center gap-x-2 mb-5">
        <div className="flex items-center gap-x-2 mb-2 md:mb-0">
          <MdEmail size={20} color="#00B906" />
          <p>Email: </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="flex justify-center gap-x-2">
            <p className="font-semibold">ratbv@ratbv.ro,</p>
            <p className="font-semibold">comunicare@ratbv.ro</p>
          </div>
          <p className="ms-0 md:ms-2">
            (pentru sesizări și publicitate marketing)
          </p>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-center xl:justify-start items-center gap-x-2 mb-5">
        <div className="flex items-center gap-x-2 mb-2 md:mb-0">
          <FaPhoneAlt size={18} color="#00B906" />
          <p>Telefon: </p>
        </div>
        <p>
          Call center: <span className="font-semibold">0368 800 600; </span>
        </p>
        <p>
          Centrala:{" "}
          <span className="font-semibold">0268 334 678, 0368 401 252; </span>
        </p>
        <p>
          Fax: <span className="font-semibold">0268 335 660</span>
        </p>
      </div>
      <div className="flex items-stretch gap-x-2 mb-5">
        <div className="flex flex-col gap-x-2 mb-3">
          <div className="flex justify-center md:justify-start items-center gap-x-2 mb-3">
            <FaCalendarAlt size={18} color="#00B906" />
            <p>Program Audiente:</p>
          </div>
          <div className="flex flex-col">
            <p className="mb-3 text-center md:text-left">
              • Director General sau înlocuitor - în fiecare săptămână, vineri,
              între orele 10.00-12.00
            </p>
            <p className="mb-3 text-center md:text-left">
              • Director Tehnic sau înlocuitor - săptămâna 2 si 4 a lunii, marţi
              între orele 15.00-17.00
            </p>
            <p className="mb-3 text-center md:text-left">
              • Director Exploatare sau înlocuitor - săptămâna 1 și 3 a lunii,
              miercuri orele 13:00-15:00
            </p>
            <p className="mb-3 text-center md:text-left">
              • Şef Serviciu Control sau înlocuitor, joi între orele 11.00-13.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
