import { ChevronDown, Languages } from "lucide-react";
import { useState } from "react";
import LanguageSwitcherModal from "./LanguageSwitcherModal";
import { LANGUAGE, type Language } from "../../types/language.type";

function LanguageSwitcher() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    LANGUAGE.RU,
  );

  return (
    <div
      className="relative opacity-0 animate-fade-in-bottom-1s"
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
          <h3 className="select-none font-medium">{selectedLanguage}</h3>
          <ChevronDown
            className={`duration-150 ${modalOpen && "rotate-180"}`}
          />
        </div>
      </div>
      {modalOpen && (
        <LanguageSwitcherModal
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          setModalOpen={setModalOpen}
          className="absolute top-12 right-0"
        />
      )}
    </div>
  );
}

export default LanguageSwitcher;
