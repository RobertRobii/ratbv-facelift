"use client";

import { useEffect, useState } from "react";
import { busData } from "@/busdata/busData";

const Line = ({ params }) => {
  const [lineData, setLineData] = useState({});

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

  console.log(lineData.data ? lineData.data : "Data is not yet available");

  const lineObject =
    lineData.data &&
    lineData.data.find((line) => line.lineNumber === parseInt(lineNumber));
  console.log(lineObject);

  const formatDate = function (isoString) {
    let date = new Date(isoString);
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <div>
      <h1>Line {lineNumber}</h1>
      <h1>
        Valid from:{" "}
        {lineObject ? formatDate(lineObject.validFrom) : "Loading..."}
      </h1>
      <h1>Route: {lineObject ? lineObject.route : "Loading..."}</h1>
      <h1>Stop: {lineObject ? lineObject.stops[0].stop : "Loading..."}</h1>
      <h1>
        Schedule:{" "}
        {lineObject ? lineObject.stops[0].schedule[0].day : "Loading..."}
      </h1>
      <h1>
        Departures:{" "}
        {lineObject
          ? lineObject.stops[0].schedule[0].departures.map(
              (departure, index) => {
                return (
                  <div key={index}>
                    {departure.hour}: {departure.minutes.join(", ")}
                  </div>
                );
              }
            )
          : "Loading..."}
      </h1>
      <h1>
        Schedule:{" "}
        {lineObject ? lineObject.stops[0].schedule[1].day : "Loading..."}
      </h1>
      <h1>
        Departures:{" "}
        {lineObject
          ? lineObject.stops[0].schedule[1].departures.map(
              (departure, index) => {
                return (
                  <div key={index}>
                    {departure.hour}: {departure.minutes.join(", ")}
                  </div>
                );
              }
            )
          : "Loading..."}
      </h1>
    </div>
  );
};

export default Line;
