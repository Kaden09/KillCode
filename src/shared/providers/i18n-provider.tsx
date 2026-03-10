import { useState } from "react";
import { I18nContext } from "../context/i18n-context";
import { i18n, type Language } from "../context";

interface I18nProviderProps {
  children: React.ReactNode;
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const currentLanguage = localStorage.getItem("language") as Language;

  const [language, setLanguage] = useState<Language>(
    currentLanguage || (navigator.language.slice(0, 2) as Language) || "en",
  );

  localStorage.setItem("language", language);

  const value = {
    language,
    setLanguage,
    i18n,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};
