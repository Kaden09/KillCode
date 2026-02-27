import { I18nContext } from "@/shared/context/i18n-context";
import { useContext, useMemo } from "react";
import type { IPortfolioItem } from "./PortfolioItem";
import order from "@/shared/assets/images/order.jpg";

export function useData() {
  const { language, i18n } = useContext(I18nContext);

  const data: IPortfolioItem[] = useMemo(
    () => [
      {
        img: order,
        title: "Какое то название",
        desc: "В этом заказе мы реализовали скрипт,который присылает покупателю письмо на почту с инструкцией по активации. Затем написали бота, который делает пересылку в телеграмм группу с продавцами для их информирования о поступлении заказа. Также скрипт ловит сообщение из чата для связи с продавцом и пересылает в группу с помощью бота. В сумме подключили 3 магазина. На реализацию ушло 4 дня",
        cost: 100,
        technology: ["Python", "Python", "Python", "Python", "Python"],
      },
    ],
    [language, i18n],
  );

  return { data };
}
