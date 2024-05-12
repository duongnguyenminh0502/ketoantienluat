import { ComponentPropsWithoutRef } from "react";

export default function H2({
  children,
  ...props
}: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className="pb-2 font-semibold text-2xl text-gray-800 lg:text-3xl dark:text-blue-800"
      {...props}
    >
      {children}

      <span className="block bg-orange-300 mt-2 w-[80px] h-1"></span>
    </h2>
  );
}
