import { ChevronDown, Languages } from "lucide-react";
import { useContext, useRef, useState } from "react";
import LanguageSwitcherModal from "./LanguageSwitcherModal";
import { I18nContext, type Language } from "@/shared/context/i18n-context";
import { useClickOutside } from "@/shared/hooks/useClickOutside";

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
        className="flex items-center bg-secondary-bg rounded-xl border border-border cursor-pointer hover:bg-secondary-bg-hover duration-100"
      >
        <span className="px-3 border-r border-border p-2">
          <Languages width={20} className="h-full" />
        </span>
        <div className="flex items-center gap-2 px-4">
          <h3 className="select-none font-medium">{language.toUpperCase()}</h3>
          <ChevronDown
            className={`duration-150 ${modalOpen && "rotate-180"}`}
          />
        </div>
      </div>
      {modalOpen && (
        <LanguageSwitcherModal
          toggleLanguage={toggleLanguage}
          setModalOpen={setModalOpen}
          className="absolute top-12 right-0"
        />
      )}
    </div>
  );
}

export default LanguageSwitcher;
