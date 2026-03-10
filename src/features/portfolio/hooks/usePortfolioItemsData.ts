import { I18nContext } from "@/shared/context/i18n-context";
import { useContext, useMemo } from "react";
import type { IPortfolioItem } from "../components/PortfolioItem";

export function usePortfolioItemsData() {
  const { language, i18n } = useContext(I18nContext);

  const data: IPortfolioItem[] = useMemo(
    () =>
      i18n[language].portfolio.map((item) => ({
        img: item.img,
        title: item.title,
        desc: item.desc,
        cost: item.cost,
        stack: item.stack,
      })),
    [language, i18n],
  );

  return { data };
}
