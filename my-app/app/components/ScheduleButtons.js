"use client";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useInView } from "react-intersection-observer";

const ScheduleButtons = ({ toggleReverse, isReverse, generatePDF }) => {
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
        className="flex flex-col md:flex-row justify-center items-center md:justify-between mb-6"
      >
        <button
          onClick={toggleReverse}
          className="text-accent bg-transparent border border-accent w-[220px] px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition-all duration-200 mb-6 xl:mb-0"
        >
          {isReverse ? "Vezi cursa directa" : "Vezi cursa inversa"}
        </button>
        <button
          onClick={generatePDF}
          className="text-accent bg-transparent border border-accent w-[220px] px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition-all duration-200"
        >
          Salvare tabel format PDF
        </button>
      </motion.div>
    </section>
  );
};

export default ScheduleButtons;
