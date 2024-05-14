import H2 from "_@/app/_comps/H2";

export default function Special() {
  return (
    <section id="5" className="scroll-my-10">
      <div className="gap-10 grid">
        <div className="gap-10 grid lg:grid-cols-[2fr_3fr]">
          <H2>
            <span className="text-red-600">6</span> Điểm khác biệt chỉ có tại
            dịch vụ thành lập công ty của Tiến Luật
          </H2>
          <p>
            Việc lựa chọn một dịch vụ thành lập công ty có uy tín và chuyên
            nghiệp không phải là việc dễ dàng. Tại Tiến Luật, chúng tôi không
            chỉ giúp quý khách hàng trong việc đăng ký thành lập mà còn đảm bảo
            đem lại sự hài lòng trong từng bước thực hiện.
          </p>
        </div>

        <div className="items-start gap-6 grid lg:grid-cols-3 lg:-mx-16 lg:px-10 rounded-2xl">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 bg-white px-5 py-5 border rounded-lg h-full"
            >
              <p className="pt-10 font-medium text-[40px] text-blue-800 lg:text-[60px]">
                {index + 1}
              </p>
              <div className="content-start gap-2 grid">
                <p className="font-medium text-lg text-orange-800 lg:text-xl">
                  {item.title}
                </p>
                <ul className="gap-1 grid">
                  {item.items.map((item, index) => {
                    const [title, content] = item.split(": ");
                    return (
                      <li key={index} className="text-[14px] lg:text-[15px]">
                        <span className="font-medium">{title}</span>: {content}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    title: "Tiết kiệm thời gian và công sức",
    items: [
      "Tiết kiệm thời gian: Tiến Luật đảm bảo quy trình nhanh chóng và hiệu quả, giúp doanh nghiệp tiết kiệm thời gian quý báu.",
      "Giảm công sức đi lại: Với cam kết hoàn thành đúng hẹn theo thỏa thuận, doanh nghiệp có thể giảm bớt gánh nặng công việc và tập trung vào hoạt động kinh doanh chính.",
    ],
  },
  {
    title: "Tư vấn miễn phí từ A – Z",
    items: [
      "Tư vấn doanh nghiệp: Tiến Luật tư vấn miễn phí về điều kiện thành lập công ty từ việc lựa chọn loại hình doanh nghiệp, soạn thảo điều lệ sao cho phù hợp với doanh nghiệp.",
      "Tuân thủ pháp lý: Mọi quy trình thủ tục khi đăng ký đều tuân thủ theo đúng quy định của pháp luật.",
    ],
  },
  {
    title: "Tiết kiệm chi phí thành lập",
    items: [
      "Tối ưu hóa chi phí: Mọi chi phí thừa không cần thiết sẽ được tối ưu hóa trong quy trình đăng ký để không phải gặp bất kỳ khoản phí phát sinh nào khác.",
      "Dịch vụ trọn gói: Với một mức giá cạnh tranh đi kèm với dịch vụ trọn gói mọi thủ tục ban đầu đến khi hoàn thiện mọi thủ tục.",
    ],
  },
  {
    title: "Bàn giao kết quả tận nơi",
    items: [
      "Bàn giao tại nhà: Kết quả đăng ký doanh nghiệp sẽ được bàn giao đầy đủ đến tay quý khách hàng bao gồm: Giấy phép; con dấu; bảng hiệu công ty….",
      "Thời gian nhanh chóng: Chúng tôi sẽ bàn giao kết quả trong thời gian sớm nhất, quý khách hàng không cần phải mất công đi lại.",
    ],
  },
  {
    title: "Hỗ trợ và tư vấn sau dịch vụ",
    items: [
      "Hỗ trợ sau thành lập: Dịch vụ của chúng tôi không chỉ dừng lại ở việc thành lập công ty mà còn đồng hành cùng doanh nghiệp sau khi công ty đi vào hoạt động.",
      "Tư vấn pháp lý: Hỗ trợ và tư vấn doanh nghiệp về các thủ tục pháp lý sau khi thành lập, đảm bảo hoạt động đúng quy định.",
    ],
  },
  {
    title: "Hỗ trợ về kế toán thuế",
    items: [
      "Hỗ trợ kế toán: Sau khi thành lập công ty, Tiến Luật cung cấp dịch vụ kế toán, giúp doanh nghiệp quản lý tài chính một cách chính xác và hiệu quả.",
      "Báo cáo thuế: Hỗ trợ doanh nghiệp mới trong việc lập báo cáo thuế, tư vấn cách tối ưu hóa các khoản thuế phải nộp.",
    ],
  },
];
