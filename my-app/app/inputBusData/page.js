"use client";

import { useState } from "react";

const Page = () => {
  const [busData, setBusData] = useState("");

  const handleChange = (e) => {
    setBusData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let input = e.target.elements[0].value;
    let output = input.replace(/\s/g, "");
    console.log(output);
    setBusData(input);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center h-screen"
    >
      <textarea
        value={busData}
        onChange={handleChange}
        rows={20}
        className="resize rounded-md border-2 border-gray-300 p-2 w-[500px]"
      />
      <button className="px-4 py-2 bg-gray-600 rounded-md text-white mt-10">
        Submit
      </button>
    </form>
  );
};

export default Page;
