"use client";

import { useEffect, useState, useRef } from "react";

import { busData } from "@/busdata/busData";

import DesktopTable from "@/app/components/DesktopTable";
import MobileTable from "@/app/components/MobileTable";

import Image from "next/image";

const Line = ({ params }) => {
  const [lineData, setLineData] = useState({});

  const [width, setWidth] = useState(window.innerWidth);

  const lineNumber = params.lineNumber[0];

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

  // console.log(lineData.data ? lineData.data : "Data is not yet available");

  const lineObject =
    lineData.data &&
    lineData.data.find((line) => line.lineNumber === parseInt(lineNumber));
  console.log(lineObject);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = width <= 768;

  useEffect(() => {
    if (firstStopRef.current) {
      const rect = firstStopRef.current.getBoundingClientRect();
      const busElement = document.getElementById("bus");
      busElement.style.position = "absolute";
      busElement.style.left = `${rect.left}px`;
    }
  }, [lineObject, width]);

  const formatDate = function (isoString) {
    let date = new Date(isoString);
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const firstStopRef = useRef(null);

  const [currentStation, setCurrentStation] = useState(null);
  const [selectedStationData, setSelectedStationData] = useState(
    lineObject && lineObject.stops[0].stop
  );

  useEffect(() => {
    if (lineObject && lineObject.stops && lineObject.stops.length > 0) {
      setCurrentStation(lineObject.stops[0].stop);
      setSelectedStationData(lineObject.stops[0]);
    }
  }, [lineObject]);

  return (
    <section className="container mx-auto">
      <div className="w-full bg-accent rounded-lg flex items-center justify-center h-20 text-xl xl:text-3xl text-white font-bold mb-10">
        <p className="mr-6 xl:mr-10  bg-white text-accent px-4 py-2 text-center rounded-xl">
          {lineNumber}
        </p>
        <h1>{lineObject ? lineObject.route : "Loading..."}</h1>
      </div>

      <div className="hidden xl:block">
        <div className="flex justify-between items-center">
          {lineObject &&
            lineObject.stops.map((stop, index) => {
              return (
                <p
                  key={index}
                  className={
                    stop.stop === currentStation
                      ? "text-accent cursor-pointer hover:text-accent transition-all duration-200"
                      : "text-gray-700 cursor-pointer hover:text-accent transition-all duration-200"
                  }
                  onClick={(e) => {
                    setCurrentStation(stop.stop);
                    setSelectedStationData(stop);
                    const rect = e.target.getBoundingClientRect();
                    console.log(`Pozitia la stanga pe pagina: ${rect.left}`);
                    const busElement = document.getElementById("bus");
                    busElement.style.position = "absolute";
                    busElement.style.left = `${rect.left}px`;
                  }}
                  ref={index === 0 ? firstStopRef : null}
                >
                  {stop.stop}
                </p>
              );
            })}
        </div>

        <div className="h-[50px] flex items-center mb-4">
          <p
            id="bus"
            style={{
              position: "absolute",
              transition: "left 0.5s ease-in-out",
            }}
          >
            <Image
              src="/bus-icon.png"
              alt="Bus icon"
              width={50}
              height={50}
            ></Image>
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-lg xl:text-2xl">
          Statia: {lineObject ? currentStation : "Loading..."}
        </p>
        <p className="text-gray-500">
          Valabil din:{" "}
          {lineObject ? formatDate(lineObject.validFrom) : "Loading..."}
        </p>
      </div>

      {isMobile ? (
        <MobileTable lineObject={lineObject} />
      ) : (
        <DesktopTable
          lineObject={lineObject}
          selectedStationData={selectedStationData}
        />
      )}
    </section>
  );
};

export default Line;
