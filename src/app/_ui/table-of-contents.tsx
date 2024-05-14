export default function TableOfContents() {
  return (
    <section className="lg:block hidden">
      <div className="gap-2 border-2 grid bg-blue-100/50 px-6 py-4 border-blue-800 rounded-xl">
        <p className="font-medium text-blue-800 text-lg">Nội dung chính: </p>
        <ul className="gap-1 grid">
          {data.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-1 text-[14px] text-blue-500"
            >
              <span>{index + 1}.</span>
              <a href={`#${index + 1}`}>{item.content}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const data = [
  {
    content: "Báo giá chi phí dịch vụ thành lập công ty trọn gói tại Tiến Luật",
  },
  {
    content: "Bảng dự toán tổng chi phí thành lập công ty",
  },
  {
    content: "Thời gian hoàn thành dịch vụ thành lập công ty, doanh nghiệp",
  },
  {
    content: "Thông tin khách hàng cần cung cấp khi đăng ký thành lập công ty",
  },
  {
    content:
      "6 Điểm khác biệt chỉ có tại dịch vụ thành lập công ty của Tiến Luật",
  },
  {
    content: "Quy trình cung cấp dịch vụ thành lập công ty tại Tiến Luật",
  },
  {
    content: "Năm 2024, những việc cần làm sau khi thành lập công ty",
  },
  {
    content: "Một số câu hỏi thường gặp khi thành lập công ty, doanh nghiệp",
  },
];
