import H2 from "_@/app/_comps/H2";
import clsx from "clsx";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export default function Questions() {
  const len = data.length;
  const dataWithIndex = data.map((item, index) => ({ ...item, index }));
  const [part1, part2] = [
    dataWithIndex.slice(0, len / 2 + 1),
    dataWithIndex.slice(len / 2 + 1),
  ];
  return (
    <section id="8" className="scroll-my-10">
      <div>
        <H2>Một số câu hỏi thường gặp khi thành lập công ty, doanh nghiệp</H2>

        <div className="gap-x-6 grid lg:grid-cols-2">
          <div>
            {part1.map((item, index) => (
              <Collapse key={index} title={item.title} index={item.index}>
                <p className="pt-4 text-[15px] text-neutral-80">
                  {item.description}
                </p>
              </Collapse>
            ))}
          </div>
          <div>
            {part2.map((item, index) => (
              <Collapse key={index} title={item.title} index={item.index}>
                <p className="pt-4 text-[15px] text-neutral-80">
                  {item.description}
                </p>
              </Collapse>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const Collapse = ({
  title,
  children,
  index,
  defaultChecked,
}: {
  title: string;
  children: React.ReactNode;
  index: number;
  defaultChecked?: boolean;
}) => {
  return (
    <div key={index}>
      <input
        defaultChecked={defaultChecked}
        name="collapse-question"
        id={`collapse-question-${index}`}
        type="checkbox"
        className="peer"
      />
      <label
        htmlFor={`collapse-question-${index}`}
        className={clsx([
          "block cursor-pointer select-none",
          "transition-[background] duration-300",
          "peer-checked:[&_#content]:grid-rows-[1fr]",
          "peer-checked:[&_#caret]:hidden",
        ])}
      >
        <div className="grid mx-auto">
          <div className="flex justify-between items-start gap-4 py-4 border-b text-zkp-100">
            <p className="font-medium text-blue-900">
              <span>{title}</span>
            </p>
            {/* dấu trừ khi đóng, dấu cộng khi mở */}
            <div className="relative pt-6 w-4 pointer-events-none">
              <span
                id="caret"
                className="top-1/2 left-1/2 absolute bg-neutral-80 bg-red-600 w-4 h-[2.5px] -translate-x-1/2 -translate-y-1/2 rotate-90"
              />
              <span className="top-1/2 left-1/2 absolute bg-neutral-80 bg-red-600 w-4 h-[2.5px] -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div
            id="content"
            className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300"
          >
            <div className="overflow-hidden">{children}</div>
          </div>
        </div>
      </label>
    </div>
  );
};

const data = [
  {
    title: "Thành lập công ty, doanh nghiệp có cần bằng cấp gì không?",
    description:
      "Không. Đa số các ngành nghề đều không yêu cầu bằng cấp. Ngoại trừ các ngành dịch vụ như khám chữa bệnh, thẩm định, các tổ chức tín dụng, đấu giá, kiểm toán.",
  },
  {
    title: "Đặt tên công ty cần lưu ý điều gì?",
    description:
      "Một số lưu ý khi đặt tên công ty bạn cần biết khi đặt tên cho công ty:\n\nTên công ty phải bao gồm 03 thành tố theo thứ tự: Công ty + Loại hình doanh nghiệp + Tên riêng.\nKhông đặt tên trùng hoặc gây nhầm lẫn với tên của doanh nghiệp đã đăng ký.\nKhông sử dụng tên cơ quan nhà nước, đơn vị, tổ chức chính trị – xã hội và lực lượng vũ trang nhân dân để làm toàn bộ hoặc một phần tên riêng của doanh nghiệp.\nKhông sử dụng từ ngữ, ký hiệu vi phạm truyền thống lịch sử, văn hóa, xã hội, đạo đức và thuần phong mỹ tục của dân tộc.",
  },
  {
    title: "Tư vấn giúp tôi một số lưu ý khi đặt vốn điều lệ?",
    description:
      "Vốn điều lệ là tổng giá trị tài sản do các thành viên đã góp hoặc cam kết góp vốn khi thành lập công ty. Pháp luật không quy định vốn điều lệ tối thiểu (ngoại trừ ngành nghề yêu cầu vốn pháp định hoặc vốn ký quỹ). Cơ bản vốn điều lệ sẽ tác động tới mức lệ phí môn bài mà công ty phải đóng hằng năm, cụ thể như sau:\n\nDoanh nghiệp, tổ chức có vốn điều lệ >10 tỷ đồng phải nộp lệ phí môn bài 03 triệu đồng/năm.\nDoanh nghiệp, tổ chức có vốn điều lệ ≤10 tỷ đồng phải nộp lệ phí môn bài 02 triệu đồng/năm.\nChi nhánh, văn phòng đại diện, địa điểm kinh doanh, đơn vị sự nghiệp, tổ chức kinh tế khác phải nộp lệ phí môn bài 01 triệu đồng/năm.",
  },
  {
    title: "Mở cho công ty tài khoản ngân hàng để làm gì?",
    description:
      "Quy định không yêu cầu bắt buộc công ty phải mở tài khoản ngân hàng. Tuy nhiên, hiện nay đa số các Chi cục Thuế yêu cầu việc nộp thuế thông qua hình thức nộp thuế điện tử. Và hơn nữa, tài khoản ngân hàng cũng giúp doanh nghiệp thuận tiện và uy tín hơn trong các giao dịch với đối tác, khách hàng. Vì vậy, việc mở tài khoản ngân hàng dù không bắt buộc nhưng vẫn là việc cần thiết đối với doanh nghiệp.",
  },
  {
    title:
      "Sau khi thành lập doanh nghiệp và hoạt động tôi phải đóng những khoản thuế nào?",
    description:
      "Tuỳ vào ngành nghề, doanh nghiệp sẽ có nghĩa vụ với các loại thuế khác nhau. Về cơ bản doanh nghiệp sau khi thành lập và hoạt động sẽ phải có nghĩa vụ đóng các loại thuế sau:\n\nThuế giá trị gia tăng (GTGT): thường là 10% nếu có xuất hóa đơn;\nThuế thu nhập doanh nghiệp (TNDN): thường là 20% trên tổng lợi nhuận năm;\nThuế thu nhập cá nhân (TNCN): thường từ 10% của phần thu nhập trên 11 triệu đồng (sau khi khấu trừ).\nThuế thu nhập đặc biệt: thường áp dụng cho các lĩnh vực rượu, bia, thuốc lá, xe hơi…\nThuế bảo vệ môi trường: thường áp dụng cho các lĩnh vực liên quan đến môi trường như xăng, dầu, túi ni lông, thuốc diệt muỗi, diệt cỏ…\nThuế nhập khẩu: áp dụng cho các doanh nghiệp nhập hàng từ nước ngoài.",
  },
  {
    title: "Cách đặt tên công ty hay và không bị trùng?",
    description:
      "Khi bạn sử dụng dịch vụ thành lập cty trọn gói tại Lạc Việt. Chuyên viên sẽ hỗ trợ bạn cách đặt tên công ty hay hoàn toàn miễn phí. Tên doanh nghiệp được xem là tên thương hiệu riêng để nhận diện cho đối tác, khách hàng. Cho dù bạn chỉ sử dụng gói mở công ty giá rẻ nhất. Chúng tôi vẫn hỗ trợ bạn tìm và đặt tên doanh nghiệp phù hợp, không bị trùng với tên khác.",
  },
  {
    title:
      "Bảng giá dịch vụ thành lập công ty trọn gói đã bao gồm thuế môn bài chưa?",
    description:
      "Chưa. Từ năm 2022, thành lập doanh nghiệp mới sẽ được miễn lệ phí môn bài năm đầu tiên. Vậy nên, lệ phí môn bài chủ doanh nghiệp cũng không cần phải đóng khi thành lập công ty uy tín mới.",
  },
  {
    title:
      "Tôi chưa có hộ khẩu thì có được thành lập công ty, doanh nghiệp tại TPHCM không?",
    description:
      "Được. Miễn là bạn là công dân Việt Nam và có đầy đủ năng lực hành vi dân sự. Bạn có thể thành lập công ty uy tín tại TPHCM hoặc bất cứ đâu trên toàn lãnh thổ Việt Nam.",
  },
  {
    title:
      "Tôi có được đặt trụ sở công ty ở chung cư, căn hộ hoặc nhà riêng tôi đang ở không?",
    description:
      "Với chung cư, căn hộ hầu như đa số đều không được đăng ký làm trụ sở. Ngoại trừ các chung cư, căn hộ có đăng ký chức năng thương mại hoặc làm văn phòng. Còn nhà riêng thì lưu ý cần có số nhà rõ ràng.",
  },
  {
    title: "Nên dùng hóa đơn giấy hay hóa đơn điện tử?",
    description:
      "Nên dùng hóa đơn điện tử. Bởi vì các ưu điểm như: giảm chi phí in ấn, lưu trữ, vận chuyển…. Tiết kiệm thời gian lập, xuất, tra cứu. Giảm thiểu thủ tục hành chính, phát hành nhanh chóng, tiện lợi và bảo mật tốt. Chuyển đổi hóa đơn giấy sang hóa đơn điện tử cũng là chủ trương và yêu cầu của nhà nước.",
  },
  {
    title: "Mua chữ ký số để làm gì?",
    description:
      "Chữ ký số (Token USB) là loại chữ ký điện tử sử dụng để thay thế cho chữ ký thường bằng tay trên các thiết bị điện tử số. Các văn bản và tài liệu số. Chữ ký số dùng để kê khai nộp thuế trực tuyến, kê khai hải quan điện tử. Giao dịch ngân hàng điện tử, giao dịch chứng khoán điện tử, kê khai bảo hiểm xã hội điện tử. Cổng thông tin một cửa quốc gia, cơ quan hành chính. Ký hợp đồng với đối tác làm ăn trực tuyến và gửi qua email. Được đánh giá có mức độ tin cậy, bảo mật và tính xác thực cao.",
  },
];
