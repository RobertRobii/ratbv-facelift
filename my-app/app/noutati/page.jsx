"use client";

import { useState, useEffect, useRef } from "react";
import Loading from "@/components/Loading";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const news = [
  {
    image: "/images/carousel/autobuz-te1-brasov.jpg",
    date: "22.03.2024",
    title:
      "Orare valabile din 16 octombrie 2023 pentru transportul special al elevilor!",
    description:
      "De luni, 25 martie 2024, autobuzul care deservește traseul de transport special pentru elevi TE 1 (Noua - Saturn - Livada Poștei - Șirul Beethoven) va opri și în stația ”Cometei”, de pe Bulevardul Saturn, la ora 07:18.",
  },
  {
    image: "/images/carousel/autobuz-36-brasov.jpg",
    date: "22.03.2024",
    title: "Modificare importanta pentru traseul liniei 36!",
    description:
      "Pentru o mai bună asigurare a cerințelor de mobilitate ale călătorilor din zona cartierului Tractorul, RATBV va extinde de luni, 25 martie 2024 traseul liniei 36, acesta urmând a deservi încă patru stații nou înființate.",
  },
  {
    image: "/images/carousel/massif-brasov.jpg",
    date: "06.03.2024",
    title: "Informatii transport festival MASSIF!",
    description:
      "Mii de iubitori ai sporturilor de iarnă, muzicii, aventurii, distracției, dar și a experiențelor exclusiviste se vor aduna săptămâna viitoare la cea de a doua ediție a celui mai mare eveniment muzical și de entertainment organizat într-o stațiune montană",
  },
  {
    image: "/images/carousel/autobuz-biciclete-brasov.jpg",
    date: "27.02.2024",
    title: "RATBV a crescut capacitatea de transport la 60 de biciclete/oră!",
    description:
      "Având în vedere condițiile meteo favorabile, dar și solicitările primite din partea bicicliștilor, operatorul de transport RATBV va relua, de mâine, transportul bicicletelor în Poiana Brașov.",
  },
  {
    image: "/images/carousel/compostor-brasov.jpg",
    date: "21.02.2024",
    title:
      "Au fost remediate problemele tehnice din sistemul de eliberare a titlurilor de călătorie!",
    description:
      "Defecțiunea tehnică a fost remediată, sistemele de ticketing și de monitorizare funcționează. Se pot elibera la punctele de vânzare toate tipurile de titluri de călătorie. Panourile de informare din stații, complet operaționale.",
  },
];

const Noutati = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const truncateDescription = (description) => {
    if (description.length > 180) {
      return description.slice(0, 180) + "...";
    }
    return description;
  };

  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
        <section className="container mx-auto pt-[100px] md:pt-[120px] pb-[100px]">
          <h1 className="mx-auto md:mx-0 text-xl text-center mb-5 text-white bg-accent px-4 py-2 rounded-lg w-[250px]">
            Noutati
          </h1>
          <div className="h-[350px] lg:h-[570px] mt-[80px] lg:mt-[100px]">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper"
            >
              {news.map((item) => (
                <SwiperSlide>
                  <div className="w-[200px] lg:w-[500px] lg:h-[250px] mx-auto">
                    <div className="w-[200px] lg:w-[500px] h-[140px] lg:h-[250px] mx-auto">
                      <Image
                        src={item.image}
                        alt=""
                        width={500}
                        height={500}
                        className="rounded-xl drop-shadow-lg"
                      ></Image>
                    </div>

                    <h1 className="text-sm lg:text-xl font-semibold text-gray-700 mt-4 mb-2">
                      {item.date}
                    </h1>
                    <h1 className="text-sm lg:text-xl font-semibold text-accent my-2 mb-4">
                      {item.title}
                    </h1>
                    <p className="hidden lg:block text-gray-500">
                      {truncateDescription(item.description)}
                    </p>
                    <button className="text-medium lg:text-xl text-accent mt-2 lg:mt-4 hover:underline">
                      <Link href="#">Citeste mai mult →</Link>
                    </button>
                  </div>
                </SwiperSlide>
              ))}
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </div>
        </section>
      )}
    </main>
  );
};

export default Noutati;
