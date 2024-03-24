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

import { news } from "@/app/data/newsData";

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

  const newsRef = useRef(null);
  const [selectedNews, setSelectedNews] = useState(null);
  const carouselRef = useRef(null);

  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
        <section className="container mx-auto pt-[100px] md:pt-[120px] pb-[100px]">
          <h1
            ref={carouselRef}
            className="mx-auto md:mx-0 text-xl text-center mb-5 text-white bg-accent px-4 py-2 rounded-lg w-[250px]"
          >
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
                <SwiperSlide key={item.title}>
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
                    <button
                      onClick={() => {
                        setSelectedNews(item);
                        newsRef.current?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                      className="text-medium lg:text-xl text-accent mt-2 lg:mt-4 hover:underline"
                    >
                      Citeste mai mult →
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

          <div className="mt-10" ref={newsRef}>
            {selectedNews && (
              <>
                <h1 className="text-lg lg:text-xl text-center md:text-left font-semibold text-gray-700 mb-2 pt-[100px]">
                  {selectedNews.title}
                </h1>
                <p className="text-gray-600 text-justify">
                  {selectedNews.fullDescription
                    .split("\n")
                    .map((paragraph, index) => (
                      <div key={index}>
                        {paragraph}
                        <br />
                      </div>
                    ))}
                </p>
                <button
                  className="text-accent bg-transparent border border-accent w-[220px] px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition-all duration-200 mt-10"
                  onClick={() => {
                    carouselRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Vezi mai multe stiri
                </button>
              </>
            )}
          </div>
        </section>
      )}
    </main>
  );
};

export default Noutati;
