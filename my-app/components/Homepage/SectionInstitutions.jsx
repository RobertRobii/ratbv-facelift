import Image from "next/image";
import Link from "next/link";

export default function SectionInstitutions() {
  return (
    <section className="flex flex-col justify-center items-center py-10">
      <div className="flex flex-col justify-center container">
        <h2 className="home-h2 mb-10">Institutii De Interes</h2>
        <div className="flex flex-wrap justify-center items-center gap-16">
          <Link href="https://abmee.ro/" target="_blank">
            <Image src="/images/Abmee.jpg" width={230} height={80} alt="" />
          </Link>
          <Link href="https://www.metropolabrasov.ro/" target="_blank">
            <Image src="/images/Amb.jpg" width={230} height={80} alt="" />
          </Link>
          <Link href="https://anpc.ro/ce-este-sal/" target="_blank">
            <Image src="/images/ANPC1.jpg" width={230} height={80} alt="" />
          </Link>
          <Link
            href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage"
            target="_blank"
          >
            <Image src="/images/ANPC2.jpg" width={230} height={80} alt="" />
          </Link>
          <Link href="https://www.brasovcity.ro/" target="_blank">
            <Image
              src="/images/Brasovcity.jpg"
              width={230}
              height={80}
              alt=""
            />
          </Link>
          <Link href="https://fiipregatit.ro/" target="_blank">
            <Image
              src="/images/Fiipregatit.jpg"
              width={230}
              height={80}
              alt=""
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
