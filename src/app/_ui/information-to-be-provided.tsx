import H2 from "_@/app/_comps/H2";
import Image from "next/image";
import { GoStarFill } from "react-icons/go";

export default function InformationToBeProvided() {
  return (
    <section id="4" className="scroll-my-10">
      <div className="items-center gap-10 grid lg:grid-cols-[1fr,1fr]">
        <div className="gap-4 grid">
          <div className="gap-4 grid">
            <H2>
              Thông tin khách hàng cần cung cấp khi đăng ký thành lập công ty
            </H2>
            <p>
              Dịch vụ thành lập công ty của Tiến Luật giúp quý khách hàng loại
              bỏ nỗi lo về việc tìm hiểu và chuẩn bị hồ sơ phức tạp. Để bắt đầu
              sử dụng dịch vụ, khách hàng chỉ cần cung cấp một số thông tin cơ
              bản, Tiến Luật sẽ hỗ trợ quý khách hàng hoàn thiện mọi thủ tục một
              cách nhanh chóng và hiệu quả.
            </p>
          </div>

          <div className="gap-1 grid shadow-[0px_0px_30px_#3333333b] px-5 py-5 rounded-xl">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <GoStarFill className="text-yellow-500 shrink-0" />
                {item}
              </div>
            ))}
          </div>

          <p>
            Khi đã nhận được đầy đủ thông tin từ phía khách hàng, đội ngũ tư vấn
            viên chuyên nghiệp của Tiến Luật sẽ bắt đầu soạn hồ sơ trong vòng 30
            phút và mang đến tận nơi để tư vấn và ký tên hồ sơ thành lập công
            ty.
          </p>
        </div>
        <Image
          src="/images/info.webp"
          alt="time"
          sizes="(max-width: 1366px) 100vw, 1366px"
          width={1366}
          height={768}
          className="rounded-xl"
        />
      </div>
    </section>
  );
}

const data = [
  "Tên công ty, doanh nghiệp dự định thành lập;",
  "Địa chỉ nơi đặt trụ sở chính của công ty;",
  "Ngành nghề kinh doanh hoạt động của doanh nghiệp muốn đăng ký;",
  "Vốn điều lệ và tỷ lệ vốn góp của các thành viên trong công ty;",
  "Bản sao CMND/CCCD hoặc hộ chiếu của người đại diện theo pháp luật.",
];
