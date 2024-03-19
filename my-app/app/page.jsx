"use client";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import Carousel from "@/components/Carousel";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const slides = [
    "https://picsum.photos/id/15/2560/1440",
    "https://picsum.photos/id/16/2560/1440",
    "https://picsum.photos/id/17/2560/1440",
    "https://picsum.photos/id/18/2560/1440",
  ];

  const [pageHeight, setPageHeight] = useState(null);

  useEffect(() => {
    const handleHeightResize = () => {
      setPageHeight(window.innerHeight);
    };
    handleHeightResize();
    window.addEventListener("resize", handleHeightResize);
    return () => window.removeEventListener("resize", handleHeightResize);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main>
          <section
            className="relative flex flex-col justify-center items-center"
            style={
              pageHeight > 768
                ? { height: `${pageHeight - 60}px` }
                : { height: "auto" }
            }
          >
            <div className="absolute flex justify-center items-center bg-black">
              <div className="max-w-screen-2xl">
                <Carousel autoSlide={true}>
                  {[
                    ...slides.map((s, i) => (
                      <img
                        src={s}
                        key={i}
                        alt="Carousel Images"
                        className="object-cover min-h-screen z-[-10] opacity-70"
                      />
                    )),
                  ]}
                </Carousel>
              </div>
            </div>
            <div className="relative container z-10 w-full">
              <div className="flex flex-col justify-center bg-gray-200/25 shadow-xl backdrop-filter backdrop-blur-lg rounded-lg h-[300px] w-96 px-6 py-3">
                <h1 className="flex flex-col text-5xl text-white drop-shadow-xl py-3 mb-12">
                  Bun Venit, <span className="pt-3">Portalul RATBV</span>
                </h1>
                <div className="flex justify-between items-center px-5">
                  <button className="bg-accent rounded-xl text-white shadow-lg py-2 px-5">
                    Vezi liniile
                  </button>
                  <a className="drop-shadow-lg text-accent underline underline-offset-2">
                    Vezi Tarifele
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="relative z-10 flex flex-col items-center bg-white">
            <div className="bg-gradient-to-b from-gray-400 to-white h-[60px] w-full"></div>
            <div className="flex flex-col bg-white w-full container py-5">
              <h2 className="home-h2">Linii RATBV</h2>
              <div className="py-3">
                <p>The lines will be here!</p>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Home;
