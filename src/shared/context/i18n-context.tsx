import { createContext } from "react";
import { i18n } from "./i18n-data";
import type { I18nSchema } from "../types/i18n.types";

export type Language = "ru" | "en";

export interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  i18n: {
    [key in Language]: I18nSchema;
  };
}

export const I18nContext = createContext<I18nContextType>({
  language: "ru",
  setLanguage: () => {},
  i18n: i18n,
});
