import type { I18nSchema } from "@/shared/types/i18n.types";

export type Language = "ru" | "en";

export interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  i18n: {
    [key in Language]: I18nSchema;
  };
}
