"use client";
import { ReactNode, cloneElement, createElement } from "react";

type SectionProps = {
  isLine?: boolean;
  index: number;
  title: string;
  description: string;
};

export default function Section({
  isLine,
  index,
  title,
  description,
}: SectionProps) {
  const splitDescription = description.split("\n");
  return (
    <div
      className="flex gap-10"
      style={{
        zIndex: index,
      }}
    >
      <div className="lg:flex flex-col hidden shrink-0">
        <span className="inline-block bg-orange-700 px-5 py-1 rounded-full font-semibold text-white">
          Bước {index}
        </span>
        {isLine ? (
          <div className="relative w-full h-full grow">
            <div className="top-0 left-1/2 absolute border-orange-400 border border-dashed w-px h-[calc(100%+40px)] -translate-x-1/2"></div>
          </div>
        ) : null}
      </div>
      <div className="gap-1 grid">
        <p className="font-medium text-blue-800 text-xl">{title}</p>
        <div className="gap-1 grid text-[15px]">
          {splitDescription.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
