import { CircleDollarSign, Shield, Zap } from "lucide-react";
import type { IAdvantageItem } from "./AdvantageItem";
import AdvantageItem from "./AdvantageItem";
import { useContext, useMemo } from "react";
import { I18nContext } from "@/shared/context/i18n-context";

function AdvantageItemsList() {
  const { language, i18n } = useContext(I18nContext);

  const data: IAdvantageItem[] = useMemo(
    () => [
      {
        icon: <Zap width={40} height={40} strokeWidth={1} />,
        title: i18n[language].advantages.cards.firstCard.title,
        description: i18n[language].advantages.cards.firstCard.description,
      },
      {
        icon: <Shield width={40} height={40} strokeWidth={1} />,
        title: i18n[language].advantages.cards.secondCard.title,
        description: i18n[language].advantages.cards.secondCard.description,
      },
      {
        icon: <CircleDollarSign width={40} height={40} strokeWidth={1} />,
        title: i18n[language].advantages.cards.tertiaryCard.title,
        description: i18n[language].advantages.cards.tertiaryCard.description,
      },
    ],
    [language, i18n],
  );

  return (
    <div className="relative w-full flex items-center justify-center gap-10">
      {data.map((item, index) => (
        <AdvantageItem
          key={item.title}
          icon={item.icon}
          title={item.title}
          description={item.description}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </div>
  );
}

export default AdvantageItemsList;
