"use client";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useInView } from "react-intersection-observer";

const RouteInfo = ({ lineNumber, routeInfo }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6, // Cat de mult din element trebuie sa fie vizibil pentru a declansa animatia
  });

  return (
    <section ref={ref}>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="w-full bg-accent rounded-lg flex items-center justify-center h-20 text-xl xl:text-3xl text-white font-bold mb-10"
      >
        <p className="mr-6 xl:mr-10 bg-white text-accent px-4 py-2 text-center rounded-xl">
          {lineNumber}
        </p>
        <h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {routeInfo}
        </h1>
      </motion.div>
    </section>
  );
};

export default RouteInfo;
