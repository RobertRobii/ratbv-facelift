"use client";

import { useEffect, useState } from "react";

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
