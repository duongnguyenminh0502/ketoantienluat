import H2 from "_@/app/_comps/H2";
import Card from "_@/app/_ui/product-price/_comps/card";
import { DiRuby } from "react-icons/di";
import { FaCrown } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";

export default function ProductPrice() {
  return (
    <section id="1" className="scroll-my-10">
      <div className="gap-8 lg:gap-16 grid">
        <div className="gap-6 lg:gap-10 grid lg:grid-cols-2">
          <H2>
            Báo giá chi phí dịch vụ thành lập công ty trọn gói tại Tiến Luật
          </H2>
          <p>
            Tiến Luật cung cấp bảng giá dịch vụ thành lập doanh nghiệp trọn gói,
            đã bao gồm tất cả lệ phí Nhà Nước và chi phí liên quan. Với 3 gói
            dịch vụ từ cơ bản đến nâng cao, chúng tôi đáp ứng mọi nhu cầu và
            giúp quý khách hàng hoàn thiện thủ tục đăng ký doanh nghiệp một cách
            nhanh chóng và hiệu quả.
          </p>
        </div>
        <div className="gap-10 grid lg:grid-cols-3">
          {data.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    name: "GÓI CƠ BẢN",
    price: 1290000,
    icon: GoStarFill,
    list: [
      "Lệ Phí Nhà Nước",
      "Đăng Bố Cáo",
      "Dấu Tròn Doanh Nghiệp",
      "Trình Ký",
      "Giao Nhận Hồ Sơ Tận Nhà",
      "Mở Tài Khoản Ngân Hàng Số Đẹp",
      "Thời gian thực hiện từ 3 đến 5 ngày",
    ],
  },
  {
    name: "GÓI NÂNG CAO",
    price: 3790000,
    icon: FaCrown,
    list: [
      "Lệ Phí Nhà Nước",
      "Đăng Bố Cáo",
      "Dấu Tròn Doanh Nghiệp",
      "Hồ Sơ Thuế Ban Đầu Tại Chi Cục Thuế",
      "Trình Ký",
      "Giao Nhận Hồ Sơ Tận Nhà",
      "Chữ Ký Số (Token): 1 Năm",
      "Hoá Đơn Điện Tử: 300 số",
      "Mở Tài Khoản Ngân Hàng Số Đẹp",
      "Tặng 10+ Khóa học Marketing Online",
      "Thời Gian Thực Hiện từ 4 đến 6 ngày",
    ],
  },
  {
    name: "GÓI HOÀN THIỆN",
    price: 4990000,
    icon: DiRuby,
    isBest: true,
    list: [
      "Lệ Phí Nhà Nước",
      "Miễn Phí Báo Cáo Thuế 6 Tháng",
      "Đăng Bố Cáo",
      "Dấu Tròn Doanh Nghiệp",
      "Hồ Sơ Thuế Ban Đầu Tại Chi Cục Thuế",
      "Trình Ký",
      "Giao Nhận Hồ Sơ Tận Nhà",
      "Chữ Ký Số (token): 1 Năm",
      "Hoá Đơn Điện Tử: 500 Số",
      "Miễn Phí 3 Tháng Kế Toán Ban Đầu",
      "Tặng 10+ Khoá Học Marketing Online",
      "Mở Tài Khoản Ngân Hàng Số Đẹp",
    ],
  },
];
