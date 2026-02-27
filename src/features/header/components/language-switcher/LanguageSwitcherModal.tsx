import { useContext, type Dispatch, type SetStateAction } from "react";
import { I18nContext, type Language } from "@/shared/context/i18n-context";

interface ILanguageSwitcherModal {
  toggleLanguage: (language: Language) => void;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

function LanguageSwitcherModal({
  toggleLanguage,
  setModalOpen,
  className = "",
}: ILanguageSwitcherModal) {
  const { language } = useContext(I18nContext);
  return (
    <ul
      onClick={() => setModalOpen(false)}
      className={`flex items-center flex-col border border-border overflow-hidden rounded-xl cursor-pointer bg-secondary-bg w-full animate-fade-in-bottom z-999 ${className}`}
    >
      <li
        onClick={() => toggleLanguage("ru")}
        className={`w-full py-2 text-center hover:bg-secondary-bg-hover duration-100 select-none ${language === "ru" ? "bg-secondary-bg-hover" : "bg-secondary-bg"}`}
      >
        RU
      </li>
      <hr className="text-border w-full" />
      <li
        onClick={() => toggleLanguage("en")}
        className={`w-full py-2 text-center hover:bg-secondary-bg-hover duration-100 select-none ${language === "en" ? "bg-secondary-bg-hover" : "bg-secondary-bg"}`}
      >
        EN
      </li>
    </ul>
  );
}

export default LanguageSwitcherModal;
