import { I18nContext } from "@/shared/context/i18n-context";
import { useContext } from "react";
import { Link } from "react-router";

function Navbar() {
  const { language, i18n } = useContext(I18nContext);

  return (
    <nav className="hidden lg:block">
      <ul className="flex min-[950px]:gap-10 select-none">
        <a
          href="#advantages"
          className="cursor-pointer hover:text-secondary-font duration-100 opacity-0 animate-fade-in-bottom-1s"
          style={{ animationDelay: "0.1s" }}
        >
          {i18n[language].header.navigation.advantages}
        </a>
        <a
          href="#instruction"
          className="cursor-pointer hover:text-secondary-font duration-100 opacity-0 animate-fade-in-bottom-1s"
          style={{ animationDelay: "0.2s" }}
        >
          {i18n[language].header.navigation.instruction}
        </a>
        <a
          href="#contacts"
          className="cursor-pointer hover:text-secondary-font duration-100 opacity-0 animate-fade-in-bottom-1s"
          style={{ animationDelay: "0.3s" }}
        >
          {i18n[language].header.navigation.contacts}
        </a>
        <Link
          to="/portfolio"
          className="cursor-pointer hover:text-secondary-font duration-100 opacity-0 animate-fade-in-bottom-1s"
          style={{ animationDelay: "0.4s" }}
        >
          {i18n[language].header.navigation.portfolio}
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
