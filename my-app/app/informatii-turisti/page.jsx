"use client";

import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import Card from "@/components/InformatiiTuristi/Card";

const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <section className="container mx-auto pt-[120px]">
          <h1 className="text-xl mb-5 mx-auto md:mx-0 text-white bg-accent px-4 py-2 rounded-lg text-center w-[180px]">
            Informatii turisti
          </h1>

          <Card />
        </section>
      )}
    </div>
  );
};

export default page;
