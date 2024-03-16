"use client";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useInView } from "react-intersection-observer";

const MobileStations = ({
  stations,
  currentStation,
  handleStationChange,
  lineObject,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6, // Cat de mult din element trebuie sa fie vizibil pentru a declansa animatia
  });

  return (
    <section ref={ref}>
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="xl:hidden mb-10 flex justify-center items-center"
      >
        <select
          value={currentStation || ""}
          className="w-[220px] bg-accent border border-accent rounded-lg text-white focus:outline-none h-[40px] text-center"
          onChange={handleStationChange}
        >
          {lineObject &&
            stations &&
            stations.map((stop, index) => (
              <option key={index} value={stop.stop}>
                {stop.stop}
              </option>
            ))}
        </select>
      </motion.div>
    </section>
  );
};

export default MobileStations;
