import type { Dispatch, SetStateAction } from "react";
import { LANGUAGE, type Language } from "../../types/language.type";

interface ILanguageSwitcherModal {
  selectedLanguage: Language;
  setSelectedLanguage: Dispatch<SetStateAction<Language>>;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

function LanguageSwitcherModal({
  selectedLanguage,
  setSelectedLanguage,
  setModalOpen,
  className = "",
}: ILanguageSwitcherModal) {
  return (
    <ul
      onClick={() => setModalOpen(false)}
      className={`flex items-center flex-col border border-border overflow-hidden rounded-xl cursor-pointer bg-secondary-bg w-full animate-fade-in-bottom ${className}`}
    >
      <li
        onClick={() => setSelectedLanguage(LANGUAGE.RU)}
        className={`w-full py-2 text-center hover:bg-secondary-bg-hover duration-100 select-none ${selectedLanguage === LANGUAGE.RU ? "bg-secondary-bg-hover" : "bg-secondary-bg"}`}
      >
        RU
      </li>
      <hr className="text-border w-full" />
      <li
        onClick={() => setSelectedLanguage(LANGUAGE.EN)}
        className={`w-full py-2 text-center hover:bg-secondary-bg-hover duration-100 select-none ${selectedLanguage === LANGUAGE.EN ? "bg-secondary-bg-hover" : "bg-secondary-bg"}`}
      >
        EN
      </li>
    </ul>
  );
}

export default LanguageSwitcherModal;
