import Image from "next/image";
import Link from "next/link";

export default function SectionAboutUs() {
  return (
    <section className="flex flex-col items-center shadow-inner py-[100px]">
      <div className="flex lg:flex-row flex-col justify-between items-center gap-16 container">
        <div className="flex flex-col">
          <h2 className="home-h2 mb-3">Despre Noi</h2>
          <p className="text-justify md:leading-loose leading-relaxed">
            Cu o tradiție îndelungată și o prezență solidă în peisajul
            transportului public din Brașov, RATBV este un pilon vital al
            mobilității urbane. Înființată pentru a răspunde nevoilor de
            transport ale comunității, această companie autonomă asigură o rețea
            extinsă de autobuze și troleibuze, conectând orașul într-un mod
            eficient și ecologic. Obiectivul lor constant este de a oferi
            călătorilor servicii sigure, rapide și confortabile, contribuind la
            o experiență de călătorie plăcută și la dezvoltarea sustenabilă a
            orașului. Pentru a afla mai multe despre angajamentul lor față de
            comunitate și viziunea pentru viitor,{" "}
            <Link href="#" className="underline text-accent">
              citește mai mult...
            </Link>
          </p>
        </div>
        <img
          src="https://picsum.photos/id/76/2560/1440"
          width={300}
          height={200}
          className="rounded-lg shadow-lg object-contain lg:w-2/4 w-fit"
          alt="Imagine de prezentare"
        />
        {
          // Change this later into NEXT Image!!
        }
      </div>
    </section>
  );
}
