"use client";

import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return <div>{loading ? <Loading /> : <div>Intrebari frecvente</div>}</div>;
};

export default page;
