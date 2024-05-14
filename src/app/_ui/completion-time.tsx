import H2 from "_@/app/_comps/H2";
import Image from "next/image";
import { GoStarFill } from "react-icons/go";

export default function CompletionTime() {
  return (
    <section id="3" className="scroll-my-10">
      <div className="items-center gap-10 grid lg:grid-cols-[1fr,1fr]">
        <Image
          src="/images/time.webp"
          alt="time"
          sizes="(max-width: 1366px) 100vw, 1366px"
          width={1366}
          height={768}
        />
        <div className="gap-4 grid">
          <div className="gap-4 grid">
            <H2>
              Thời gian hoàn thành dịch vụ thành lập công ty, doanh nghiệp
            </H2>
            <p>
              Thủ tục và hồ sơ thành lập công ty thường phức tạp và tốn nhiều
              thời gian, đòi hỏi người thực hiện phải có kiến thức sâu rộng về
              pháp lý. Tuy nhiên, khi sử dụng dịch vụ của Tiến Luật, quá trình
              này được đơn giản hóa đáng kể, chỉ mất khoảng 4 – 5 ngày làm việc
              để hoàn tất, trong đó:
            </p>
          </div>

          <div className="gap-1 grid">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <GoStarFill className="text-yellow-500 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const data = [
  "Ngày đầu tiên, Tiến Luật sẽ hỗ trợ khách hàng soạn thảo hồ sơ đăng ký doanh nghiệp.",
  "Trong 3 ngày tiếp theo, Tiến Luật sẽ xử lý và nộp hồ sơ để được cấp Giấy chứng nhận đăng ký doanh nghiệp tại Sở Kế hoạch và Đầu tư.",
  "Trong 1 ngày sau đó, nhân viên của chúng tôi sẽ bàn giao kết quả bao gồm giấy phép và con dấu tận nơi cho quý khách hàng.",
];
