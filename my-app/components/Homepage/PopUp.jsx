import { IoMdClose } from "react-icons/io";
import { SiApple } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

export default function PopUp({ setIsOpen }) {
  return (
    <div
      className="fixed z-20 flex justify-center items-center inset-0 backdrop-blur-sm h-dvh w-dvw p-5"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative z-30 flex flex-col justify-center rounded-xl border border-2 border-accent bg-white text-black shadow-2xl sm:p-12 p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <IoMdClose
          className="absolute top-3 right-3 cursor-pointer hover:text-gray-600 w-[30px] h-[30px]"
          onClick={() => setIsOpen(false)}
        />
        <h3 className="flex flex-col font-semibold text-center text-2xl mb-6">
          Descarca Gratuit Aplicatia<span>24pay</span>
        </h3>
        <div className="flex flex-col justify-center items-center gap-4">
          <Link
            href="https://apps.apple.com/us/app/24pay/id1282006921"
            target="_blank"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center rounded-xl shadow border border-gray-700 font-semibold text-black transition hover:bg-gray-700 hover:text-white hover:shadow-none px-4 py-3">
              <SiApple className="w-[32px] h-[32px] mr-4 pb-1" />
              App Store
            </div>
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.twentyfourpay&utm_source=site"
            target="_blank"
            onClick={() => setIsOpen(false)}
          >
            <button className="flex items-center rounded-xl shadow border border-gray-700 font-semibold transition hover:bg-gray-700 hover:text-white hover:shadow-none px-4 py-3">
              <Image
                src="/svg/PlayStore_icon.svg"
                width={30}
                height={30}
                className="mr-4"
                alt="Google PlayStore"
              />
              Google Play
            </button>
          </Link>
          <Link
            href="https://appgallery.huawei.com/app/C102026983?sharePrepath=ag"
            target="_blank"
            onClick={() => setIsOpen(false)}
          >
            <button className="flex items-center rounded-xl shadow border border-gray-700 font-semibold transition hover:bg-gray-700 hover:text-white hover:shadow-none px-4 py-3">
              <Image
                src="/svg/Huawei_AppGallery.svg"
                width={30}
                height={30}
                className="mr-4"
                alt="Huawei AppGallery"
              />
              App Gallery
            </button>
          </Link>
        </div>
        <p className="flex flex-col text-gray-700 font-medium text-sm text-center mt-5">
          <Link href="https://www.24pay.ro/" className="underline">
            Sau acceseaza site-ul aplicatiei
          </Link>
          pentru mai multe detalii
        </p>
      </div>
    </div>
  );
}
