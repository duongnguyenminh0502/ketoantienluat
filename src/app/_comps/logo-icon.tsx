import Image from "next/image";

export default function LogoIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.webp"
      alt="Logo"
      width={120}
      height={120}
      className={className}
    />
  );
}
