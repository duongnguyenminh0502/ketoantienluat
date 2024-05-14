import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bottom-20 left-10 z-50 fixed flex flex-col gap-10">
      <a
        id="zalo"
        aria-label="Zalo"
        target="_blank"
        rel="noopener"
        data-link="zalo"
        href="https://zalo.me/0339597989"
        className="place-content-center grid opacity-0 p-2 rounded-full cycle zalo-theme"
      >
        <div className="relative place-content-center grid rounded-full w-full h-full overflow-hidden">
          <Image
            src="/images/zalo-logo.webp"
            className="w-[50px] object-cover"
            width={200}
            height={50}
            sizes="(max-width: 768px) 100vw, 33vw"
            alt="zalo-logo"
          />
        </div>
      </a>
      <a
        aria-label="Phone Number"
        target="_blank"
        rel="noopener"
        href="tel:0339597989"
        className="place-content-center grid p-2 rounded-full cycle phone-theme"
      >
        <div className="place-content-center grid rounded-full w-full h-full overflow-hidden">
          <FaPhoneAlt size={40} className="text-green-800" />
        </div>
      </a>
    </div>
  );
}
