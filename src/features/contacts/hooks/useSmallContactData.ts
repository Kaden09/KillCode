import { useContext, useMemo } from "react";
import type { IContact } from "../types/contact.type";
import { I18nContext } from "@/shared/context/i18n-context";

function useSmallContactData() {
  const { language, i18n } = useContext(I18nContext);

  const data: Omit<IContact, "title" | "value">[] = useMemo(
    () =>
      i18n[language].footer.contacts.map((item) => ({
        Icon: item.Icon,
        link: item.link,
        ariaLabel: item.ariaLabel,
      })),
    [language, i18n],
  );

  return { data };
}

export default useSmallContactData;
