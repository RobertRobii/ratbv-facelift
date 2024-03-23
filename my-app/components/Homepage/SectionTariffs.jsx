import Link from "next/link";
import TariffCard from "./TariffCard";

export default function SectionTariffs() {
  return (
    <section className="flex flex-col justify-center items-center bg-zinc-700 shadow-xl w-full py-10">
      <div className="flex flex-col container">
        <h2 className="text-white text-3xl font-semibold mb-10">
          Cumpara Un Bilet Sau Abonament
        </h2>
        <div className="flex flex-wrap items-center xl:justify-between justify-center gap-12">
          <TariffCard
            title="Incarca sau consulta cardul on-line"
            pText="Achizitioneaza abonament sau portofel electronic on-line."
            btnText="Vezi mai multe..."
            link="https://card.ratbv.ro/"
          />
          <TariffCard
            title="Incarcare card elevi on-line"
            pText="Incarca gratuit cardul de elevi."
            btnText="Incarca cardul acum..."
            link="https://elevi.ratbv.ro/"
            elevi={true}
          />
          <TariffCard
            title="Descarca aplicatia 24-pay"
            pText="Achizitioneaza bilet sau abonament de pe telefonul mobil."
            btnText="Descarca aplicatia..."
            image="/images/24Pay.png"
          />
        </div>
        <div className="flex flex-col items-center text-white mt-12">
          <h3 className="text-xl font-semibold">
            Mai multe informatii despre preturi
          </h3>
          <Link href="/tarife">
            <button className="bg-transparent border border-accent border-2 rounded-xl text-accent transition hover:text-white hover:bg-accent px-3 py-2 mt-4 w-fit">
              Vezi tabelul cu tarifele...
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
