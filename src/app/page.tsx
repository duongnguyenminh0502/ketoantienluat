import Image from "next/image";

export default function Home() {
  // 1018 × 22786
  return (
    <div className="flex justify-center bg-white">
      <a
        aria-label="Phone Number"
        target="_blank"
        rel="noopener"
        href="tel:0339597989"
        className="contents"
      >
        <Image
          alt="full-page"
          src="/page.png"
          width={1018}
          height={22786}
          unoptimized
        />
      </a>
    </div>
  );
}
