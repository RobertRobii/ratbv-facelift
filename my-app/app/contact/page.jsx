"use client";

import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInformation from "@/components/Contact/ContactInformation";

const Contact = () => {
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
        <div>
          <section className="container mx-auto">
            <div className="pt-[60px] md:pt-[120px] pb-[100px]">
              <div className="flex flex-col-reverse xl:flex-row justify-between">
                <ContactForm />
                <ContactInformation />
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Contact;
