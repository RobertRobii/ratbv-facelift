"use client";

import { useEffect, useState } from "react";

const busData = [
  {
    _id: 1,
    lineNumber: 1,
    route: "Triaj - Livada Postei",
    validFrom: new Date(),
    stops: [
      {
        stop: "Triaj",
        schedule: [
          {
            day: "Luni - Vineri",
            departures: [
              { hour: 8, minutes: [15, 30, 45] },
              { hour: 9, minutes: [17, 22, 51] },
              { hour: 10, minutes: [5, 37, 49] },
              { hour: 11, minutes: [10, 26, 39] },
              // Alte plecări
            ],
          },
          {
            day: "Sambata - Duminica",
            departures: [
              { hour: 8, minutes: [10, 30, 50] },
              { hour: 9, minutes: [17, 29, 41] },
              { hour: 10, minutes: [3, 20, 38] },
              { hour: 11, minutes: [35, 49, 59] },
              // Alte plecări
            ],
          },
        ],
      },
      // Alte stații
    ],
  },
  // Alte linii de autobuz
];

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
  }, []);

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

  console.log(lineData.data ? lineData.data[0] : "Data is not yet available");

  function formatDate(isoString) {
    let date = new Date(isoString);
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  return (
    <div>
      <h1>Line {lineNumber}</h1>
      <h1>
        Valid from:{" "}
        {lineData.data && lineData.data[0]
          ? formatDate(lineData.data[0].validFrom)
          : "Loading..."}
      </h1>
      <h1>
        Route:{" "}
        {lineData.data && lineData.data[0]
          ? lineData.data[0].route
          : "Loading..."}
      </h1>
      <h1>
        Stop:{" "}
        {lineData.data && lineData.data[0]
          ? lineData.data[0].stops[0].stop
          : "Loading..."}
      </h1>
      <h1>
        Schedule:{" "}
        {lineData.data && lineData.data[0]
          ? lineData.data[0].stops[0].schedule[0].day
          : "Loading..."}
      </h1>
      <h1>
        Departures:{" "}
        {lineData.data && lineData.data[0]
          ? lineData.data[0].stops[0].schedule[0].departures.map(
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
        {lineData.data && lineData.data[0]
          ? lineData.data[0].stops[0].schedule[1].day
          : "Loading..."}
      </h1>
      <h1>
        Departures:{" "}
        {lineData.data && lineData.data[0]
          ? lineData.data[0].stops[0].schedule[1].departures.map(
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
