"use client";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useInView } from "react-intersection-observer";

// Next
import Image from "next/image";

const Stations = ({
  lineObject,
  handleStationClick,
  stations,
  currentStation,
  firstStopRef,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6, // Cat de mult din element trebuie sa fie vizibil pentru a declansa animatia
  });

  return (
    <section ref={ref}>
      <motion.div
        variants={fadeIn("none", 1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="hidden xl:block"
      >
        <h1 className="text-center text-xl text-gray-700 mb-6">Traseu:</h1>
        <div className="flex justify-center items-center px-2 gap-x-[50px] gap-y-[60px] flex-wrap">
          {lineObject &&
            stations &&
            stations.map((stop, index) => {
              return (
                <div key={index} className="flex">
                  <Image
                    className="mr-2"
                    src="/svg/station-icon.svg"
                    alt="Station icon"
                    width={20}
                    height={20}
                  ></Image>
                  <p
                    className={
                      stop.stop === currentStation
                        ? "text-accent cursor-pointer hover:text-accent transition-all duration-200"
                        : "text-gray-700 cursor-pointer hover:text-accent transition-all duration-200"
                    }
                    onClick={(e) => handleStationClick(e, stop)}
                    ref={index === 0 ? firstStopRef : null}
                  >
                    {stop.stop}
                  </p>
                  {index !== stations.length - 1 && (
                    <span className="text-gray-700 ps-8"> → </span>
                  )}
                </div>
              );
            })}
        </div>

        <div className="h-[50px] flex items-center mb-4">
          <div
            id="bus"
            style={{
              position: "absolute",
              transition: "left 0.5s ease-in-out, top 0.5s ease-in-out",
            }}
          >
            <div className="flex flex-col items-center">
              <Image
                className="my-2"
                src="/svg/uparrow-icon.svg"
                alt="Up arrow icon"
                width={15}
                height={15}
              ></Image>
              <Image
                src="/svg/uparrow-icon.svg"
                alt="Bus icon"
                width={50}
                height={50}
              ></Image>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Stations;
