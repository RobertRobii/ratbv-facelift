"use client";

// Hooks
import { useEffect, useState, useRef } from "react";

// Bus data
import { busData } from "@/busdata/busData";

// PDF
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useInView } from "react-intersection-observer";

// Components
import DesktopTable from "@/components/Table/DesktopTable";
import MobileTable from "@/components/Table/MobileTable";
import RouteInfo from "@/components/RouteInfo";
import ScheduleButtons from "@/components/ScheduleButtons";
import Stations from "@/components/Stations/Stations";
import MobileStations from "@/components/Stations/MobileStations";
import Loading from "@/components/Loading";

const Line = ({ params }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6, // Cat de mult din element trebuie sa fie vizibil pentru a declansa animatia
  });

  const [lineData, setLineData] = useState({});
  const lineNumber = params.lineNumber[0];

  // useEffect(() => {
  //   const pushData = async () => {
  //     const res = await fetch("/api/pushData/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         data: busData,
  //       }),
  //     });
  //     try {
  //       if (res.ok) {
  //         console.log("Data sent successfully");
  //       }
  //     } catch (error) {
  //       console.log("Error while sending data:", error);
  //     }
  //   };

  //   pushData();
  // }, []);

  useEffect(() => {
    const getLineData = async () => {
      const res = await fetch("/api/getLineData/");
      try {
        if (res.ok) {
          const data = await res.json();
          setLineData(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getLineData();
  }, [lineNumber]);

  const lineObject =
    lineData.data &&
    lineData.data.find((line) => line.lineNumber === parseInt(lineNumber));

  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let isMobile = width <= 768;

  const [stations, setStations] = useState([]);

  const firstStopRef = useRef(null);

  useEffect(() => {
    if (firstStopRef.current) {
      const rect = firstStopRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const busElement = document.getElementById("bus");
      busElement.style.position = "absolute";
      busElement.style.left = `${rect.left + centerX - 25}px`;
      busElement.style.top = `${rect.top}px`;
      busElement.style.marginTop = "15px";
    }
  }, [lineObject, width, stations]);

  const [currentStation, setCurrentStation] = useState(null);
  const [selectedStationData, setSelectedStationData] = useState(
    lineObject && lineObject.way.stopsTo[0].stop
  );

  useEffect(() => {
    if (
      lineObject &&
      lineObject.way.stopsTo &&
      lineObject.way.stopsTo.length > 0
    ) {
      setCurrentStation(lineObject.way.stopsTo[0].stop);
      setSelectedStationData(lineObject.way.stopsTo[0]);
    }
  }, [lineObject]);

  const [isReverse, setIsReverse] = useState(false);

  useEffect(() => {
    if (lineObject) {
      setStations(
        isReverse ? lineObject.way.stopsFrom : lineObject.way.stopsTo
      );
    }
  }, [lineObject, isReverse]);

  const [routeInfo, setRouteInfo] = useState("Loading...");

  useEffect(() => {
    if (lineObject) {
      setRouteInfo(lineObject.routeTo);
    }
  }, [lineObject]);

  const toggleReverse = () => {
    setIsReverse(!isReverse);
    const reversedStations = isReverse
      ? lineObject.way.stopsTo
      : lineObject.way.stopsFrom;

    setCurrentStation(reversedStations[0].stop);
    setSelectedStationData(reversedStations[0]);
    setRouteInfo(isReverse ? lineObject.routeTo : lineObject.routeFrom);
  };

  const handleStationClick = (e, stop) => {
    setCurrentStation(stop.stop);
    setSelectedStationData(stop);

    // Daca statia pe care s-a dat click este ultima din lista, activeaza toggleReverse
    if (stations[stations.length - 1].stop === stop.stop) {
      toggleReverse();
    }

    // Restul logicii pentru click-ul pe statie
    const rect = e.target.getBoundingClientRect();
    const centerX = rect.width / 2;
    const busElement = document.getElementById("bus");

    busElement.style.position = "absolute";
    busElement.style.left = `${rect.left + centerX - 25}px`;

    // Actualizăm coordonata pe axa y cu noua valoare
    busElement.style.top = `${window.scrollY + rect.top}px`;
    busElement.style.marginTop = "15px";
  };

  const handleStationChange = (e) => {
    const selectedStationName = e.target.value;
    const selectedStation = stations.find(
      (station) => station.stop === selectedStationName
    );

    if (stations[stations.length - 1].stop === selectedStationName) {
      toggleReverse();
    }

    setCurrentStation(selectedStationName);
    setSelectedStationData(selectedStation);
  };

  const generatePDF = async () => {
    try {
      const pdf = new jsPDF();
      const table = document.getElementById("pdf-table");

      const canvas = await html2canvas(table);
      const imgData = canvas.toDataURL("image/png");

      pdf.text(`Linia: ${lineNumber}`, 10, 10);
      pdf.text(`Directia: ${routeInfo}`, 10, 20);
      pdf.text(`Statia: ${currentStation}`, 10, 30);
      pdf.addImage(imgData, "PNG", 10, 40, 190, 0);
      pdf.text(
        "Nota: Respectarea orelor de trecere poate fi influentata de conditiile de trafic!",
        10,
        170
      );

      pdf.save("table.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const formatDate = function (isoString) {
    let date = new Date(isoString);
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <section className="container mx-auto" ref={ref}>
      <RouteInfo lineNumber={lineNumber} routeInfo={routeInfo} />
      <ScheduleButtons
        toggleReverse={toggleReverse}
        isReverse={isReverse}
        generatePDF={generatePDF}
      />
      <Stations
        lineObject={lineObject}
        handleStationClick={handleStationClick}
        stations={stations}
        currentStation={currentStation}
        firstStopRef={firstStopRef}
      />
      <MobileStations
        stations={stations}
        currentStation={currentStation}
        handleStationChange={handleStationChange}
        lineObject={lineObject}
      />

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="flex justify-between items-center"
      >
        <p className="text-gray-700 text-lg xl:text-2xl">
          Statia: {lineObject ? currentStation : "Loading..."}
        </p>
        <p className="text-gray-700">
          Valabil din:{" "}
          {lineObject ? formatDate(lineObject.validFrom) : "Loading..."}
        </p>
      </motion.div>

      {isMobile ? (
        <MobileTable
          lineObject={lineObject}
          selectedStationData={selectedStationData}
        />
      ) : (
        <DesktopTable
          tableId="pdf-table"
          lineObject={lineObject}
          selectedStationData={selectedStationData}
        />
      )}

      <motion.h1
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="my-6 text-lg xl:text-2xl text-gray-700"
      >
        <span className="font-bold">Nota: </span>Respectarea orelor de trecere
        poate fi influentata de conditiile de trafic!
      </motion.h1>
    </section>
  );
};

export default Line;
