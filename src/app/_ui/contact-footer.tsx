import Logo from "_@/app/_comps/logo";
import Image from "next/image";

export default function ContactFooter() {
  return (
    <section>
      <div className="relative flex justify-center bg-[rgb(177_152_101)] py-10 lg:py-20 overflow-hidden">
        <Image
          src="/images/trongdong.webp"
          alt="Trống đồng"
          width={400}
          height={400}
          className="top-[20px] lg:-top-1/2 z-0 absolute animate-spin-slow duration-100 lg:size-[1000px]"
        />
        <div className="relative flex lg:flex-row flex-col lg:justify-around items-center gap-10 px-8 lg:px-2 w-full text-white">
          <div className="justify-center grid lg:w-[400px]">
            <Logo className="mx-auto" />
            <p className="text-center">
              Công ty TNHH Dịch Vụ Kế Toán Tiến Luật đi đầu trong lĩnh vực kế
              toán thuế cho doanh nghiệp. Tạo ra hệ sinh thái cung ứng các dịch
              vụ liên quan đến hoạt động cho công ty, doanh nghiệp
            </p>
          </div>

          <div className="gap-1 grid text-center">
            <p className="font-medium text-xl">Thông tin liên hệ</p>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-2xl">
                CÔNG TY TNHH TM DV TƯ VẤN ĐẦU TƯ PHÁT TRIỂN TIẾN LUẬT
              </p>

              <p>
                <span className="font-medium">Địa chỉ: </span>
                3B Nguyễn Văn Yến, Phường Tân Thới Hoà, Quận Tân Phú
              </p>
              <p>
                <span className="font-medium">Mã số thuế: </span>
                0318181365
              </p>
              <a data-link="zalo" href="https://zalo.me/0339597989">
                <span className="font-medium">Điện thoại: </span>0339.597.989
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
