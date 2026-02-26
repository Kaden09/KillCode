import { useState } from "react";
import { I18nContext, type Language } from "../context/i18n-context";
import { i18n } from "../context/i18n-data";

interface I18nProviderProps {
  children: React.ReactNode;
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [language, setLanguage] = useState<Language>(
    (navigator.language.slice(0, 2) as Language) || "EN",
  );

  const value = {
    language,
    setLanguage,
    i18n,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};
