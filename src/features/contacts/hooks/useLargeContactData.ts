import { useContext, useMemo } from "react";
import type { IContact } from "../types/contact.type";
import { I18nContext } from "@/shared/context/i18n-context";

function useLargeContactData() {
  const { language, i18n } = useContext(I18nContext);

  const data: IContact[] = useMemo(
    () =>
      i18n[language].contacts.contactItems.map((item) => ({
        Icon: item.Icon,
        title: item.title,
        value: item.value,
        link: item.link,
        ariaLabel: item.ariaLabel,
      })),
    [language, i18n],
  );

  return { data };
}

export default useLargeContactData;
