"use client";

import { useState } from "react";

import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      if (!response.ok) {
        console.error("Error while sending data!");
      }

      const data = await response.json();

      if (data.success) {
        toast.success("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Eraore la trimiterea mesajului!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-sm flex flex-col justify-center items-center md:justify-start md:items-start"
      >
        <h1 className="text-xl mb-5 text-white bg-accent px-4 py-2 rounded-lg">
          Sesizari
        </h1>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Numele tau
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            value={name}
            className="bg-white text-[16px] border border-slate-300 rounded focus:drop-shadow-md focus:outline-none focus:ring
focus:ring-[#00B906]/50 rounded-lg pl-2 pr-3 py-2 w-[250px] md:w-[350px]"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Emailul tau
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            value={email}
            className="bg-white text-[16px] border border-slate-300 rounded focus:drop-shadow-md focus:outline-none focus:ring
focus:ring-[#00B906]/50 rounded-lg pl-2 pr-3 py-2 w-[250px] md:w-[350px]"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Mesajul tau
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            value={message}
            rows="8"
            style={{ maxHeight: "500px", minHeight: "100px" }}
            className="bg-white text-[16px] border border-slate-300 rounded focus:drop-shadow-md focus:outline-none focus:ring
focus:ring-[#00B906]/50 rounded-lg pl-2 pr-3 py-2 w-[250px] md:w-[350px]"
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-accent bg-transparent border border-accent w-[220px] px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition-all duration-200"
        >
          Trimite mesaj
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default ContactForm;
