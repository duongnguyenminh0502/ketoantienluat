import Button from "_@/app/_comps/button";
import Logo from "_@/app/_comps/logo";
import { FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center py-2">
      <div className="mx-auto sm:mx-0 sm:mr-auto">
        <Logo />
      </div>
      <div className="sm:block hidden">
        <ul className="flex items-center gap-8">
          <li>
            <button className="flex items-center gap-2 hover:text-blue-700">
              <FaPhoneAlt />
              <span>0339.597.989</span>
            </button>
          </li>
          <li>
            <Button>ĐĂNG KÝ TƯ VẤN</Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
