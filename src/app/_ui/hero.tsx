import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative px-[--max-padding] lg:pr-0 lg:h-[calc(400rem/16)]">
      <div className="gap-4 grid pt-8 lg:pt-16 max-w-[760px]">
        <h1 className="font-semibold text-4xl text-blue-800">
          Dịch vụ thành lập công ty, doanh nghiệp trọn gói (2024)
        </h1>
        <p className="text-blue-800">
          Tiến Luật là một đơn vị chuyên cung cấp dịch vụ thành lập công ty theo
          hình thức trọn gói, giúp tối ưu hóa thời gian và chi phí trong quá
          trình khởi nghiệp ban đầu. Với hơn 10 năm kinh nghiệm, chúng tôi hỗ
          trợ và tư vấn việc thành lập doanh nghiệp tại nhiều tỉnh thành trên
          khắp cả nước. Chúng tôi cam kết hỗ trợ doanh nghiệp từ quá trình thành
          lập công ty cho đến giai đoạn hoạt động, đảm bảo giải quyết mọi vấn đề
          một cách nhanh chóng và chính xác.
        </p>
      </div>

      <Image
        src="/images/hero.webp"
        alt="Thành lập công ty"
        sizes="(max-width: 800px) 100vw, 800px"
        height={460}
        width={620}
        className="lg:block top-0 right-0 z-[-1] absolute hidden h-full"
      />
    </section>
  );
}
