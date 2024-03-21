import Carousel from "@/components/Carousel";
import Link from "next/link";

export default function SectionCarousel() {
  const slides = [
    "https://picsum.photos/id/15/2560/1440",
    "https://picsum.photos/id/16/2560/1440",
    "https://picsum.photos/id/17/2560/1440",
    "https://picsum.photos/id/18/2560/1440",
    "https://picsum.photos/id/19/2560/1440",
    "https://picsum.photos/id/20/2560/1440",
  ];
  // !!!NOTE - PICTURES ADDED HAVE TO HAVE AT LEAST 1024 WIDTH (ex. 1200x900 is good, 600x400 is bad DO NOT USE OR ELSE IT WILL BREAK THE HOMEPAGE)!!!

  return (
    <>
      <div className="absolute flex justify-center items-center ">
        <div className="max-w-screen-2xl">
          <Carousel autoSlide={true}>
            {[
              ...slides.map((s, i) => (
                <img
                  src={s}
                  key={i}
                  alt="Carousel Images"
                  className="object-cover min-h-svh z-[-10]"
                />
              )),
            ]}
          </Carousel>
        </div>
      </div>
      <div className="absolute z-[1] min-h-svh bg-black/50 lg:bg-inherit lg:bg-gradient-to-r from-zinc-900 to-transparent w-full"></div>
      <div className="relative container z-10 w-full">
        <div className="flex flex-col justify-center lg:w-fit">
          <h1 className="flex flex-col text-7xl text-white drop-shadow-xl text-center lg:text-left py-3">
            Bun Venit, <span className="pt-3">Portalul RATBV</span>
          </h1>
          <p className="text-white text-xl text-center lg:text-left mb-12">
            Alternativa Verde Și Rapidă A Brașovenilor
          </p>
          <div className="flex justify-between items-center">
            <button className="bg-accent rounded-xl text-white text-lg shadow-lg transition hover:bg-accent/50 py-2 px-5">
              <Link href="#">Vezi liniile</Link>
            </button>
            <button className="bg-transparent border border-accent rounded-xl text-accent text-lg shadow-lg transition hover:bg-accent hover:text-white py-2 px-5">
              <Link href="#">Vezi Tarifele</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
