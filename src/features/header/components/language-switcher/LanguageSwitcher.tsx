import { ChevronDown, Languages } from "lucide-react";
import { useContext, useRef, useState } from "react";
import LanguageSwitcherModal from "./LanguageSwitcherModal";
import { I18nContext } from "@/shared/context/i18n-context";
import { useClickOutside } from "@/shared/hooks/useClickOutside";
import type { Language } from "@/shared/context";

function LanguageSwitcher() {
  const [modalOpen, setModalOpen] = useState(false);
  const { language, setLanguage } = useContext(I18nContext);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleLanguage = (value: Language) => {
    setLanguage(value);
  };

  useClickOutside(menuRef, () => {
    setModalOpen(false);
  });

  return (
    <div
      ref={menuRef}
      className="relative opacity-0 animate-fade-in-bottom-1s z-999"
      style={{ animationDelay: "0.3s" }}
    >
      <div
        onClick={() => setModalOpen(!modalOpen)}
        className="flex items-center bg-secondary-bg rounded-lg sm:rounded-xl border border-border cursor-pointer hover:bg-secondary-bg-hover duration-100"
      >
        <span className="px-3 border-r border-border p-2">
          <Languages className="h-full w-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </span>
        <div className="flex items-center gap-2 px-4">
          <h3 className="select-none font-medium text-xs sm:text-sm md:text-base">
            {language.toUpperCase()}
          </h3>
          <ChevronDown
            className={`h-full w-3 sm:w-4 sm:h-4 md:w-5 md:h-5 duration-150 ${modalOpen && "rotate-180"}`}
          />
        </div>
      </div>
      {modalOpen && (
        <LanguageSwitcherModal
          toggleLanguage={toggleLanguage}
          setModalOpen={setModalOpen}
          className="absolute top-10 sm:top-11 md:top-12 right-0"
        />
      )}
    </div>
  );
}

export default LanguageSwitcher;
