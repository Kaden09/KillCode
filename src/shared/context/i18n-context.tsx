import { createContext } from "react";
import { i18n } from ".";
import type { I18nContextType } from "./types/i18n.type";

export const I18nContext = createContext<I18nContextType>({
  language: "ru",
  setLanguage: () => {},
  i18n: i18n,
});
