import clsx from "clsx";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

export default function Button(
  props: PropsWithChildren<ComponentPropsWithoutRef<"button">>
) {
  const { children, className, ...rest } = props;
  return (
    <button
      className={clsx([
        "flex items-center justify-center",
        "bg-blue-500 border-gray-300 hover:bg-blue-400 shadow-md px-6 py-3 text-center border rounded-lg font-medium text-sm text-white",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 uppercase",
        className,
      ])}
    >
      {children}
    </button>
  );
}
