"use client";

import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

const Noutati = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return <div>{loading ? <Loading /> : <div>Noutati</div>}</div>;
};

export default Noutati;
