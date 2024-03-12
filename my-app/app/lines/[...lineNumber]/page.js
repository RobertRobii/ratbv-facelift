"use client";

import { useEffect, useState } from "react";
import { busData } from "@/busdata/busData";
import DesktopTable from "@/app/components/DesktopTable";
import MobileTable from "@/app/components/MobileTable";

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

  useEffect(() => {
    const pushData = async () => {
      const res = await fetch("/api/pushData/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: busData,
        }),
      });
      try {
        if (res.ok) {
          console.log("Data sent successfully");
        }
      } catch (error) {
        console.log("Error while sending data:", error);
      }
    };

    pushData();
  }, []);

  // console.log(lineData.data ? lineData.data : "Data is not yet available");

  const lineObject =
    lineData.data &&
    lineData.data.find((line) => line.lineNumber === parseInt(lineNumber));
  // console.log(lineObject);

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

  const formatDate = function (isoString) {
    let date = new Date(isoString);
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <section className="container mx-auto">
      <div className="w-full bg-accent rounded-lg flex items-center justify-center h-20 text-xl xl:text-3xl text-white font-bold mb-10">
        <p className="mr-6 xl:mr-10  bg-white text-accent w-10 text-center rounded-lg">
          {lineNumber}
        </p>
        <h1>{lineObject ? lineObject.route : "Loading..."}</h1>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-gray-500">
          Valabil din:{" "}
          {lineObject ? formatDate(lineObject.validFrom) : "Loading..."}
        </p>
        <p className="text-gray-500 text-lg xl:text-2xl">
          Statia: {lineObject ? lineObject.stops[0].stop : "Loading..."}
        </p>
      </div>

      {isMobile ? (
        <MobileTable lineObject={lineObject} />
      ) : (
        <DesktopTable lineObject={lineObject} />
      )}
    </section>
  );
};

export default Line;
