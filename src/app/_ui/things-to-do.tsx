import H2 from "_@/app/_comps/H2";
import clsx from "clsx";
import Image from "next/image";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export default function ThingTodo() {
  return (
    <section id="7" className="scroll-my-10">
      <div className="gap-20 grid lg:grid-cols-[4fr_6fr]">
        <div>
          <H2>Năm 2024, những việc cần làm sau khi thành lập công ty</H2>
          <p>
            Các công việc mà chủ doanh nghiệp cần làm sau khi đăng ký dịch vụ
            thành lập công ty tại Tiến Luật sẽ bao gồm các công việc sau:
          </p>
          <div className="grid">
            {data.map((item, index) => (
              <Collapse key={index} title={item.title} index={index}>
                <p className="pt-4 text-[15px] text-neutral-80">
                  {item.description}
                </p>
              </Collapse>
            ))}
          </div>
        </div>
        <div>
          <Image
            src="/images/important.webp"
            alt=""
            width={1366}
            height={968}
            sizes="(max-width: 1366px) 100vw, 1366px"
          />
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
        name="collapse"
        id={`collapse-${index}`}
        type="checkbox"
        className="hidden peer"
      />
      <label
        htmlFor={`collapse-${index}`}
        className={clsx([
          "block cursor-pointer select-none",
          "transition-[background] duration-300",
          "peer-checked:[&_#content]:grid-rows-[1fr]",
          "peer-checked:[&_#caret]:hidden",
        ])}
      >
        <div className="grid mx-auto">
          <div className="flex justify-between items-center gap-4 py-4 border-b text-zkp-100">
            <p className="font-medium text-blue-900">
              <span>{index + 1}.</span> <span>{title}</span>
            </p>
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
    title: "Kê khai thuế ban đầu",
    description:
      "Sau khi thành lập công ty, doanh nghiệp cần thực hiện đầy đủ các thủ tục kê khai thuế ban đầu. Đây là một bước không thể thiếu và có rất quan trọng trong hoạt động kinh doanh của doanh nghiệp, đồng thời đóng góp quan trọng vào việc thiết lập hệ thống kế toán của doanh nghiệp.\nKhi sử dụng dịch vụ thành lập công ty trọn gói tại Tiến Luật, bạn sẽ được hỗ trợ soạn và nộp hồ sơ kê khai thuế ban đầu. Tuy nhiên, nếu khách hàng tự thực hiện thủ tục thành lập, Tiến Luật có hỗ trợ dịch vụ kê khai thuế ban đầu với chi phí 700.000đ tại khu vực TPHCM.",
  },
  {
    title: "Mở tài khoản ngân hàng doanh nghiệp",
    description:
      "Để hoàn tất quy trình đăng ký thành lập công ty, bạn cần phải thực hiện việc đăng ký và mở tài khoản ngân hàng doanh nghiệp. Tuy nhiên, khi sử dụng trọn gói dịch vụ thành lập công ty tại Tiến Luật.\nChúng tôi sẽ hỗ trợ mở tài khoản ngân hàng với số tài khoản đẹp, chuyên viên ngân hàng sẽ trực tiếp đến tại nhà để thực hiện thủ tục mở tài khoản cho bạn.",
  },
  {
    title: "Đăng ký sử dụng hóa đơn điện tử",
    description:
      "Sau khi hoàn tất thủ tục thành lập, doanh nghiệp cần tiến hành đăng ký sử dụng hóa đơn điện tử để thực hiện việc nộp thuế và giao dịch trực tuyến. Tiến Luật sẽ hỗ trợ tư vấn và đăng ký chọn một số nhà cung cấp hóa đơn điện tử uy tín, hướng dẫn cách sử dụng hóa đơn điện tử.",
  },
  {
    title: "Đăng ký mua chữ ký số (USB Token)",
    description:
      "Trong gói nâng cao và hoàn thiện của dịch vụ thành lập công ty, doanh nghiệp trọn gói tại Tiến Luật. Chúng tôi đã bao gồm chi phí mua chữ ký số (token) cho doanh nghiệp.\nChữ ký số sẽ dùng để thực hiện các thủ tục đăng ký điện tử như: nộp và kê khai thuế, bảo hiểm xã hội, kê khai thuế trực tuyến, thực hiện các thủ tục hải quan và giao dịch online.",
  },
  {
    title: "Khắc con dấu",
    description:
      "Khắc con dấu tròn cho công ty, doanh nghiệp là bước không thể thiếu sau khi hoàn tất quá trình đăng ký thành lập doanh nghiệp. Theo quy định tại Điều 44 của Luật Doanh nghiệp, doanh nghiệp được quyền tự quyết định về hình thức, số lượng và nội dung của con dấu.\nDo đó, bạn có thể liên hệ với các đơn vị chuyên khắc dấu để đặt làm con dấu cho công ty, nội dung cụ thể của con dấu do doanh nghiệp tự quyết định và không cần thực hiện thủ tục thông báo mẫu dấu.",
  },
  {
    title: "Đặt và treo bảng hiệu công ty",
    description:
      "Sau cùng, bạn cần phải đặt một bảng hiệu công ty với kích thước 20x30cm với chi phí khoảng 200.000đ. Nội dung thông tin của bảng hiệu sẽ bao gồm: tên công ty, mã số thuế và địa chỉ trụ sở doanh nghiệp.\nTreo bảng hiệu công ty được xem là nghĩa vụ và điều kiện bắt buộc phải có để cơ quan thuế có thể kiểm tra tình hình hoạt động thực tế của doanh nghiệp.",
  },
];
