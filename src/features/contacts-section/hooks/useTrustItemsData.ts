import { I18nContext } from "@/shared/context/i18n-context";
import { useContext, useMemo } from "react";

function useTrustItemsData() {
  const { language, i18n } = useContext(I18nContext);

  const data: string[] = useMemo(
    () => i18n[language].contacts.trustItems.map((item) => item),
    [language, i18n],
  );

  return { data };
}

export default useTrustItemsData;
