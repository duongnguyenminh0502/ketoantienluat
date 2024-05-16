import Button from "_@/app/_comps/button";
import Logo from "_@/app/_comps/logo";
import { FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center">
      <div className="mx-auto sm:mx-0 sm:mr-auto">
        <Logo />
      </div>
      <div className="sm:block hidden">
        <ul className="flex items-center gap-8">
          <li>
            <a
              data-link="zalo"
              href="https://zalo.me/0339597989"
              className="flex items-center gap-2 hover:text-blue-700"
            >
              <FaPhoneAlt />
              <span>03.39.59.79.89</span>
            </a>
          </li>
          <li>
            <a data-link="zalo" href="https://zalo.me/0339597989">
              <Button>ĐĂNG KÝ TƯ VẤN</Button>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
