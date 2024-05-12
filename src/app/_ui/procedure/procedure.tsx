import H2 from "_@/app/_comps/H2";
import Section from "_@/app/_ui/procedure/_comps/section/section";
import Image from "next/image";

export default function Procedure() {
  return (
    <section>
      <div className="gap-8 lg:gap-16 grid lg:grid-cols-[4fr_6fr]">
        <div className="gap-4 grid">
          <H2>Quy trình cung cấp dịch vụ thành lập công ty tại Tiến Luật</H2>
          <Image
            src="/images/process.webp"
            alt=""
            width={1366}
            height={968}
            sizes="(max-width: 1366px) 100vw, 1366px"
            className="rounded-xl"
          />
          <p>
            Khi sử dụng dịch vụ thành lập công ty, doanh nghiệp của Tiến Luật,
            quý khách hàng sẽ được hỗ trợ từng bước theo đúng trình tự thủ tục.
            <br /> <br />
            Quy trình thành lập công ty của chúng tôi không chỉ là việc tư vấn
            mà còn là việc tìm hiểu ý định về tâm ý của quý khách hàng để lựa
            chọn loại hình doanh nghiệp phù hợp, chuẩn bị tài liệu một cách cẩn
            thận và đầy đủ. <br /> <br /> Chúng tôi cam kết làm cho quá trình
            thành lập công ty của quý khách hàng sẽ được diễn ra thuận lợi,
            nhanh chóng và đúng quy định, để doanh nghiệp có thể phát triển mạnh
            mẽ và bền vững.
          </p>
        </div>
        <div className="gap-6 grid">
          {data.map(({ index, title, description }) => (
            <Section
              key={index}
              index={index}
              title={title}
              description={description}
              isLine={index !== data.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    index: 1,
    title: "Tư vấn, tiếp nhận thông tin",
    description:
      "Tiến Luật sẽ tư vấn chi tiết và cụ thể về các loại hình doanh nghiệp, ngành nghề kinh doanh, cũng như các yêu cầu pháp lý cần thiết. Chúng tôi sẽ giúp quý khách hàng xác định rõ ràng hướng đi cho doanh nghiệp của mình, từ việc lựa chọn loại hình công ty phù hợp, đến việc đăng ký kinh doanh trong lĩnh vực mong muốn mà không lo bị trùng tên công ty.\nMọi dự định và thắc mắc của quý khách hàng sẽ được chúng tôi tiếp nhận và giải đáp, để từ đó bổ sung thông tin cần thiết vào văn bản và soạn hồ sơ đăng ký, làm thủ tục thành lập công ty cho quý khách hàng một cách nhanh chóng và hiệu quả.",
  },
  {
    index: 2,
    title: "Chuẩn bị hồ sơ",
    description:
      "Chúng tôi cam kết hỗ trợ quý khách hàng chuẩn bị một cách chính xác và đầy đủ toàn bộ hồ sơ cần thiết cho việc đăng ký kinh doanh, bao gồm các giấy tờ pháp lý và hồ sơ đăng ký thuế.\nCác thông tin về doanh nghiệp sẽ được tiếp nhận từ quý khách hàng, sau đó tiến hành soạn thảo và chuẩn bị hồ sơ đăng ký thành lập công ty, đảm bảo quy trình diễn ra suôn sẻ và hiệu quả.",
  },
  {
    index: 3,
    title: "Nộp hồ sơ và thủ tục pháp lý",
    description:
      "Sau khi đã thực hiện việc soạn thảo hồ sơ đăng ký doanh nghiệp, Tiến Luật sẽ cử nhân viên đến gặp trực tiếp khách hàng để ký kết hợp đồng dịch vụ và hồ sơ thành lập công ty.\nTiếp đến, chuyên viên sẽ thay mặt doanh nghiệp theo ủy quyền trực tiếp nộp hồ sơ qua đăng ký thành lập công ty, doanh nghiệp tại Cổng thông tin quốc gia về đăng ký doanh nghiệp.",
  },
  {
    index: 4,
    title: "Hoàn tất và bàn giao kết quả",
    description:
      "Sau khi hoàn tất quy trình đăng ký doanh nghiệp tại cơ quan đăng ký kinh doanh, Tiến Luật sẽ tiếp nhận kết quả và thực hiện kiểm tra lại các thông tin của doanh nghiệp trên Giấy chứng nhận đăng ký kinh doanh để đảm bảo tính chính xác.\nSau đó, Tiến Luật sẽ cử nhân viên bàn giao kết quả đến tận tay của khách hàng. Bạn có thể hoàn toàn an tâm khi sử dụng dịch vụ thành lập công ty trọn gói tại TPHCM được Tiến Luật cung cấp.",
  },
];
