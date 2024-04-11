import Image from "next/image";

export default function Home() {
  // 1018 × 22786
  return (
    <div className="flex justify-center bg-white">
      <Image
        alt="full-page"
        src="/page.png"
        width={1018}
        height={22786}
        unoptimized
      />
    </div>
  );
}
