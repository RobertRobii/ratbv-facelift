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

  // useEffect(() => {
  //   const getLineData = async () => {
  //     const res = await fetch("/api/getLineData/");
  //     try {
  //       if (res.ok) {
  //         const data = await res.json();
  //         setLineData(data);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   getLineData();
  // }, []);

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

  return (
    <div>
      <h1>Line {lineNumber}</h1>
      <h1>
        Route:{" "}
        {lineData.data && lineData.data[0]
          ? lineData.data[0].route
          : "Loading..."}
      </h1>
      <h1 className="font-bold">Schedule</h1>
      {lineData.data &&
        lineData.data[0] &&
        lineData.data[0].schedule.map((item, index) => (
          <div key={index}>
            <h2>{item.day}</h2>
            {item.departures.map((departure, i) => (
              <div key={i}>
                <h3>Hour: {departure.hour}</h3>
                <h4>Minutes: {departure.minutes.join(", ")}</h4>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Line;
