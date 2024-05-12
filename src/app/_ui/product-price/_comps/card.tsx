import clsx from "clsx";
import Image from "next/image";
import { ReactNode } from "react";
import { FaCheckCircle } from "react-icons/fa";

type CardProps = {
  name: string;
  price: number;
  list: ReactNode[];
  icon: (...args: any) => JSX.Element;
  isBest?: boolean;
};

export default function Card({ icon, isBest, ...props }: CardProps) {
  const Icon = icon;

  return (
    <div className="relative bg-orange-50 shadow-lg px-5 py-6 rounded-xl">
      {isBest ? (
        <div className="top-0 right-4 absolute w-[50px] lg:w-[60px]">
          <div className="relative">
            <Image
              src="/images/nenkaka.webp"
              alt="memkaka"
              width={65}
              height={88}
              sizes="(max-width: 640px) 100px, 200px"
              style={{
                filter:
                  "invert(40%) sepia(88%) saturate(1187%) hue-rotate(357deg) brightness(96%) contrast(114%)",
              }}
            />
            <span className="top-4 left-1/2 absolute font-semibold text-[10px] text-nowrap text-white lg:text-[12px] -translate-x-1/2">
              Nổi bật
            </span>
          </div>
        </div>
      ) : null}

      <div className="absolute place-items-center grid bg-orange-600 rounded-full size-12">
        <Icon className="text-white size-6" />
      </div>
      <div className="gap-8 grid grid-rows-[1fr_auto] h-full">
        <div className="content-start gap-6 grid h-full">
          <div className="justify-center gap-3 grid pt-10">
            <h3 className="font-semibold text-2xl text-center text-orange-800">
              {props.name}
            </h3>
            <p className="font-medium text-4xl text-orange-400">
              {props.price.toLocaleString()}đ
            </p>
          </div>

          <p className="bg-orange-800 mx-auto w-[80px] h-1"></p>

          <div className="gap-2 grid">
            <div className="gap-1 grid">
              {isBest ? (
                <p className="font-medium text-[14px] text-center text-orange-600">
                  GÓI ĐƯỢC SỬ DỤNG NHIỀU NHẤT
                </p>
              ) : null}
              <p className="text-[14px] text-center">
                Chi phí thành lập công ty trọn gói bao gồm
              </p>
            </div>

            <ul className="gap-1 grid">
              {props.list.map((item, index) => (
                <li
                  key={index}
                  className={clsx(
                    "flex items-center gap-2 text-[14px]",
                    isBest ? "text-orange-700" : ""
                  )}
                >
                  <FaCheckCircle className="text-orange-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-orange-500 px-6 py-3 rounded-xl text-white">
            Đăng ký ngay
          </button>
        </div>
      </div>
    </div>
  );
}
