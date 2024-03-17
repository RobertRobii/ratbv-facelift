"use client";

import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name: ", name, "email: ", email, "message: ", message);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <section className="container mx-auto">
            <div className="pt-[100px]">
              <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                <h1 className="text-xl mb-5">Contact Us</h1>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your name
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="name"
                    className="bg-white text-sm border border-slate-300 rounded focus:drop-shadow-md focus:outline-none focus:ring
                focus:ring-[#00B906]/50 rounded-lg pl-2 pr-3 py-2 w-full"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    className="bg-white text-sm border border-slate-300 rounded focus:drop-shadow-md focus:outline-none focus:ring
                focus:ring-[#00B906]/50 rounded-lg pl-2 pr-3 py-2 w-full"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Your message
                  </label>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    rows="4"
                    className="bg-white text-sm border border-slate-300 rounded focus:drop-shadow-md focus:outline-none focus:ring
                focus:ring-[#00B906]/50 rounded-lg pl-2 pr-3 py-2 w-full"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="text-accent bg-transparent border border-accent w-[220px] px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition-all duration-200"
                >
                  Send message
                </button>
              </form>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Contact;
