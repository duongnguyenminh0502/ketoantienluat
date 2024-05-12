import LogoIcon from "_@/app/_comps/logo-icon";
import clsx from "clsx";

type LogoProps = {
  className?: string;
};
export default function Logo({ className }: LogoProps) {
  return (
    <div className={clsx("flex items-center gap-2", className)}>
      <div className="grid">
        <LogoIcon className="mx-auto" />
      </div>
    </div>
  );
}
