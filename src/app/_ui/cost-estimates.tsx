import H2 from "_@/app/_comps/H2";
import Button from "_@/app/_comps/button";
import InputChecked from "_@/app/_comps/input-checked";
import Image from "next/image";

export default function CostEstimates() {
  return (
    <section id="2" className="scroll-my-10">
      <div className="gap-10 grid">
        <div className="gap-6 lg:gap-10 grid lg:grid-cols-2">
          <H2>Bảng dự toán tổng chi phí thành lập công ty</H2>
          <p>
            Bảng dự toán tổng chi phí khi đăng ký thành lập công ty dưới đây sẽ
            cho quý khách hàng biết chi tiết từng khoảng chi phí có trong gói
            dịch vụ.
          </p>
        </div>

        <div className="flex flex-col items-start gap-10 lg:grid lg:grid-cols-2 lg:shadow-[0_0_30px_0_rgb(0_0_0_/_15%)] lg:px-10 pt-10 pb-6 rounded-2xl">
          <div className="gap-3 grid">
            <p className="font-semibold text-blue-800 text-xl">
              Thành lập công ty
            </p>

            <div>
              {data.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <InputChecked />
                  {item.title}{" "}
                  {item.price ? `${item.price.toLocaleString()}đ` : ""}
                </div>
              ))}
            </div>
          </div>

          <div className="gap-3 grid">
            <p className="font-semibold text-blue-800 text-xl">
              Chi phí thành lập công ty
            </p>

            <div className="shadow-md p-5 border rounded-lg text-green-500">
              <span className="font-medium">Ngày có kết quả dự kiến: </span>
              16/05/2024 (
              <span className="font-medium">nếu đặt dịch vụ hôm nay</span>)
            </div>

            <div className="gap-2 grid shadow-md p-5 border rounded-lg">
              <p className="font-semibold text-blue-600">Thành lập công ty</p>
              <div className="px-4">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between gap-2 font-medium text-[14px]"
                  >
                    <span>{item.title}</span>
                    <span className="text-orange-500">
                      {item.price.toLocaleString()}đ
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-200 w-full h-px" />
              <div className="flex lg:flex-row flex-col justify-between items-center pt-4">
                <span className="font-medium">
                  Tổng cộng (chưa bao gồm VAT)
                </span>

                <span className="font-semibold text-2xl text-orange-500">
                  1,290,000đ
                </span>
              </div>
            </div>
          </div>

          <div className="gap-6 grid lg:grid-cols-2 col-span-2 mx-auto">
            <a
              data-link="zalo"
              href="https://zalo.me/0339597989"
              className="lg:block hidden hover:bg-blue-100 px-2 py-3 border border-blue-600 rounded-lg text-blue-600"
            >
              <span className="font-medium">Tư vấn cho tôi: </span>
              03.39.59.79.89
            </a>
            <a data-link="zalo" href="https://zalo.me/0339597989">
              <Button>Đặt dịch vụ</Button>
            </a>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col items-center gap-10 bg-gray-100 lg:mx-20 px-8 py-10 border rounded-xl">
          <Image
            src="/images/fast.webp"
            alt=""
            width={300}
            height={168}
            sizes="(max-width: 300px) 100vw, 300px"
            loading="lazy"
            className="rounded-full size-56"
          />
          <div className="content-start gap-2 grid">
            <h4 className="font-semibold text-2xl text-blue-800">
              Gói dịch vụ thành lập công ty nhanh sau 01 ngày có kết quả
            </h4>
            <p>
              Tại Tiến Luật, chúng tôi có cung cấp dịch vụ làm nhanh chỉ sau 01
              ngày có Giấy đăng ký doanh nghiệp. Nếu quý khách hàng đang có nhu
              cầu thực hiện thành lập công ty trong thời gian sớm nhất, có thể
              liên hệ Hotline/Zalo:
            </p>
            <a data-link="zalo" href="https://zalo.me/0339597989">
              <Button>
                <span className="font-semibold">Zalo: </span> 03.39.59.79.89
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    title: "Lệ phí Nhà nước",
    price: 220000,
  },
  {
    title: "Phí khắc dấu loại tốt",
    price: 450000,
  },
  {
    title: "Dấu tên + dấu chức danh",
    price: 120000,
  },
  {
    title: "Mở tài khoản ngân hàng số đẹp",
    price: 0,
  },
  {
    title: "Phí thành lập của Tiến Luật",
    price: 500000,
  },
];
