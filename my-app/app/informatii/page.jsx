"use client";

import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

const Informatii = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return <div>{loading ? <Loading /> : <div>Informatii utile</div>}</div>;
};

export default Informatii;
