import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const Card = () => {
  const specialCardDetails = [
    {
      image: "/images/aeroport-brasov.jpg",
      name: "Aeroport Brasov",
      station: "Aeroportul Brasov",
      busLines: ["A1"],
      description: "Aproximativ 1 minut de mers pe jos",
    },
    {
      image: "/images/gara-brasov.jpg",
      name: "Gara Brasov",
      station: "Gara Brasov",
      busLines: ["A1", "4", "8", "35", "100"],
      description: "Aproximativ 1 minut de mers pe jos",
    },
  ];

  const cardDetails = [
    {
      image: "/images/poiana-brasov.jpg",
      name: "Poiana Brasov",
      station: "Poaiana Brasov",
      busLines: ["20"],
      description: "Aproximativ 2 - 3 minute de mers pe jos",
    },
    {
      image: "/images/cetate-brasov.jpg",
      name: "Cetatea Brasovului",
      station: "Primarie",
      busLines: [
        "1",
        "2",
        "4",
        "5",
        "6",
        "12",
        "16",
        "17",
        "31",
        "34",
        "34B",
        "36",
        "37",
        "50",
        "51",
        "52",
      ],
      description: "Aproximativ 5 - 10 minute de mers pe jos",
    },
    {
      image: "/images/turnul-alb-brasov.jpg",
      name: "Turnul Alb",
      station: "Livada Postei",
      busLines: [
        "1",
        "2",
        "4",
        "5",
        "6",
        "12",
        "16",
        "17",
        "31",
        "34",
        "34B",
        "36",
        "37",
        "50",
        "51",
        "52",
      ],
      description: "Aproximativ 5 - 10 minute de mers pe jos",
    },
    {
      image: "/images/piata-sfatului-brasov.jpg",
      name: "Piata Sfatului",
      station: "Livada Postei",
      busLines: [
        "1",
        "2",
        "4",
        "5",
        "6",
        "12",
        "16",
        "17",
        "31",
        "34",
        "34B",
        "36",
        "37",
        "50",
        "51",
        "52",
      ],
      description: "Aproximativ 5 - 10 minute de mers pe jos",
    },
    {
      image: "/images/biserica-neagra-brasov.jpg",
      name: "Biserica Neagra",
      station: "Livada Postei",
      busLines: [
        "1",
        "2",
        "4",
        "5",
        "6",
        "12",
        "16",
        "17",
        "31",
        "34",
        "34B",
        "36",
        "37",
        "50",
        "51",
        "52",
      ],
      description: "Aproximativ 5 - 10 minute de mers pe jos",
    },
    {
      image: "/images/belvedere-tampa-brasov.jpg",
      name: "Belvedere Tampa",
      station: "Livada Postei",
      busLines: [
        "1",
        "2",
        "4",
        "5",
        "6",
        "12",
        "16",
        "17",
        "31",
        "34",
        "34B",
        "36",
        "37",
        "50",
        "51",
        "52",
      ],
      description: "Aproximativ o ora de mers pe jos",
    },
    {
      image: "/images/cetate-rasnov.jpg",
      name: "Cetatea Rasnov",
      station: "Școala Generală Nr. 9",
      busLines: ["130"],
      description: "Aproximativ 10 - 15 minute de mers pe jos",
    },
    {
      image: "/images/zoo-brasov.jpg",
      name: "Gradina Zoologica",
      station: "Școala Generală Nr. 9",
      busLines: ["17", "21", "35"],
      description: "Aproximativ 4 minute de mers pe jos",
    },
    {
      image: "/images/bastionul-graft-brasov.jpg",
      name: "Bastionul Graft",
      station: "Livada Postei",
      busLines: [
        "1",
        "2",
        "4",
        "5",
        "6",
        "12",
        "16",
        "17",
        "31",
        "34",
        "34B",
        "36",
        "37",
        "50",
        "51",
        "52",
      ],
      description: "Aproximativ 3 minute de mers pe jos",
    },
  ];

  return (
    <div>
      <p className="text-lg mt-4 mb-10 text-gray-700 text-center md:text-left">
        Principalele porti de intrare ale orasului Brasov:
      </p>

      <div className="flex jusitfy-between flex-wrap gap-x-10 gap-y-10 mb-10">
        {specialCardDetails.map((card, index) => (
          <div
            key={card.index}
            className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
          >
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 hover:scale-105 transition-all duration-300">
              <Image
                src={card.image}
                alt={card.name}
                width={400}
                height={400}
                className="min-h-56 object-cover"
              ></Image>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <FaLocationDot className="mr-2 w-5 h-5" color="#00B906" />
                <h5 className="block text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {card.name}
                </h5>
              </div>

              <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                Statia{" "}
                <span className="font-semibold text-accent">
                  {card.station}:{" "}
                </span>
                {card.busLines.map((line, index) => (
                  <span key={line}>
                    {index === card.busLines.length - 1 ? line : line + ", "}
                  </span>
                ))}
              </p>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-lg mt-4 mb-10 text-gray-700 text-center md:text-left">
        Atractii si obiective turistice in Brasov:
      </p>

      <div className="flex jusitfy-between flex-wrap gap-x-10 gap-y-10 mb-10">
        {cardDetails.map((card, index) => (
          <div
            key={card.index}
            className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
          >
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 hover:scale-105 transition-all duration-300">
              <Image
                src={card.image}
                alt={card.name}
                width={400}
                height={400}
                className="min-h-56 object-cover"
              ></Image>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <FaLocationDot className="mr-2 w-5 h-5" color="#00B906" />
                <h5 className="block text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {card.name}
                </h5>
              </div>

              <p className="block text-base antialiased font-light leading-relaxed text-inherit">
                Statia{" "}
                <span className="font-semibold text-accent">
                  {card.station}:{" "}
                </span>
                {card.busLines.map((line, index) => (
                  <span key={line}>
                    {index === card.busLines.length - 1 ? line : line + ", "}
                  </span>
                ))}
              </p>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
