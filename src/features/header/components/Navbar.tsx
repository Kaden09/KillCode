import { I18nContext } from "@/shared/context/i18n-context";
import { useContext } from "react";

function Navbar() {
  const { language, i18n } = useContext(I18nContext);

  return (
    <nav>
      <ul className="flex gap-15 select-none">
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
        <a
          className="cursor-pointer hover:text-secondary-font duration-100 opacity-0 animate-fade-in-bottom-1s"
          style={{ animationDelay: "0.4s" }}
        >
          {i18n[language].header.navigation.portfolio}
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
