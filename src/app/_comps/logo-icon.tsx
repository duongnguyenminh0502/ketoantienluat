import clsx from "clsx";
import React, { ComponentPropsWithoutRef } from "react";

export default function LogoIcon({
  className,
  ...props
}: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="170.667"
      height="170.667"
      version="1"
      viewBox="0 0 128 128"
      className={clsx("size-16 fill-blue-600", className)}
      {...props}
    >
      <path
        d="M206 1058c-8-13-32-53-55-90l-41-68h360V591c0-262 2-310 15-321s15 26 15 324v336H340c-95 0-160 4-160 10 0 5 12 30 27 55l28 45h384c383 0 384 0 366 20-17 19-31 20-391 20H220l-14-22z"
        transform="matrix(.1 0 0 -.1 0 128)"
      ></path>
      <path
        d="M620 960c0-19 7-20 245-20h245l-28-45-27-45H600V201l80 51 80 51v228c0 222-1 229-20 229s-20-7-20-222V315l-40-22c-21-13-41-23-44-23-4 0-6 124-6 275v275h448l41 69c22 38 41 74 41 80 0 8-84 11-270 11-263 0-270 0-270-20z"
        transform="matrix(.1 0 0 -.1 0 128)"
      ></path>
    </svg>
  );
}
