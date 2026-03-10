import { I18nContext } from "@/shared/context/i18n-context";
import { useContext, useMemo } from "react";
import type { IAdvantageItem } from "../types/AdvatageItem.type";

function useAdvantagesData() {
  const { language, i18n } = useContext(I18nContext);

  const data: IAdvantageItem[] = useMemo(
    () =>
      i18n[language].advantages.cards.map((item) => ({
        Icon: item.Icon,
        title: item.title,
        desc: item.desc,
      })),
    [language, i18n],
  );

  return { data };
}

export default useAdvantagesData;
