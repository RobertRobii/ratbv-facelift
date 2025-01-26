import Image from "next/image";
import logo from "@/public/svg/PrimariaBrasov_logo.svg";
import xLogo from "@/public/svg/X_logo.svg";
import fbLogo from "@/public/svg/Facebook_logo.svg";
import ytLogo from "@/public/svg/Youtube_logo.svg";

export default function FooterLaptop() {
  return (
    <div className="flex flex-col gap-3 text-white bg-gradient-to-b from-[#00B906] to-[#008706] pb-3">
      <div className="flex justify-center">
        <div className="flex flex-col gap-3 text-sm border-r border-white w-64 mr-16">
          <h2 className="footer-h2">CONTACT</h2>
          <p>Adresa: Str. Harmanului nr. 49 Brasov, Romania</p>
          <p>Call Center: 0368.800.600</p>
          <p>
            E-mail: ratbv@ratbv.ro (sesizari) comunicare@ratbv.ro (publicitate)
          </p>
          <a
            href="/contact"
            className="font-semibold cursor-pointer underline w-fit"
          >
            Vezi mai multe...
          </a>
        </div>
        <div className="border-r border-white w-64 mr-16">
          <h2 className="footer-h2">DESPRE NOI</h2>
        </div>
        <div className="border-r border-white w-64">
          <h2 className="footer-h2">INFORMAȚII LEGALE</h2>
        </div>
      </div>
      <div className="flex justify-center gap-[500px]">
        <div className="flex flex-col-reverse gap-2">
          <div className="flex gap-4">
            <a
              href="https://twitter.com/ratbv2"
              className="cursor-pointer hover:opacity-75"
              target="_blank"
            >
              <Image src={xLogo} width={24} alt="Link to Twitter page" />
            </a>
            <a
              href="https://www.facebook.com/people/RATBV-SA/100063710065402/"
              className="cursor-pointer hover:opacity-75"
              target="_blank"
            >
              <Image src={fbLogo} width={26} alt="Link to Facebook page" />
            </a>
            <a
              href="https://www.facebook.com/150501902285918/videos/1439531053462004"
              className="cursor-pointer hover:opacity-75"
              target="_blank"
            >
              <Image src={ytLogo} width={28} alt="Link to YouTube page" />
            </a>
          </div>
          <p>Follow Us</p>
        </div>
        <a href="https://www.brasovcity.ro/" className="flex items-center">
          <Image
            src={logo}
            width={65}
            alt="Website Primaria Municipiului Brasov"
          />
          <p className="w-36 pl-4 font-bold text-base tracking-wider">
            PRIMĂRIA MUNICIPIULUI BRAȘOV
          </p>
        </a>
      </div>
      <div className="flex justify-center">
        <p className="flex-row text-slate-200 text-sm">
          Copyright © {new Date().getFullYear()}. Robert & Darian. All Rights
          Reserved
        </p>
      </div>
    </div>
  );
}
