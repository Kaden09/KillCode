import { useContext, useMemo } from "react";
import type { IGrowthStep } from "../types/Growth.type";
import { I18nContext } from "@/shared/context/i18n-context";

function useGrowthStepsData() {
  const { language, i18n } = useContext(I18nContext);

  const data: IGrowthStep[] = useMemo(
    () =>
      i18n[language].growth.growthSteps.map((item) => ({
        title: item.title,
        desc: item.desc,
      })),
    [language, i18n],
  );

  return { data };
}

export default useGrowthStepsData;
