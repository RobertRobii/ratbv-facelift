import React from "react";

const Card = () => {
  const images = [""];

  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
          alt="card-image"
        />
      </div>
      <div className="p-6">
        <h5 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Cetatea Brasovului
        </h5>
        <p className="block text-base antialiased font-light leading-relaxed text-inherit">
          Statia <span className="font-semibold text-accent">Primarie: </span>1,
          2, 4, 5, 6, 12, 16, 17, 31, 34, 34B, 36, 37, 50, 51, 52.
        </p>
      </div>
    </div>
  );
};

export default Card;
