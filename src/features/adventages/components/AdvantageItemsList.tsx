import { CircleDollarSign, Shield, Zap } from "lucide-react";
import type { IAdvantageItem } from "./AdvantageItem";
import AdvantageItem from "./AdvantageItem";

const data: IAdvantageItem[] = [
  {
    icon: <Zap width={40} height={40} strokeWidth={1} />,
    title: "Скорость",
    description:
      "Мы не затягиваем с разработкой - первые результаты видны уже на старте.  Сдаём в срок, даже когда задача сложнее, чем казалось.",
  },
  {
    icon: <Shield width={40} height={40} strokeWidth={1} />,
    title: "Безопасность",
    description:
      "Не идём на компромиссы - каждый проект проходит многоуровневую проверку. Безопасность закладываем в основу, а не добавляем в конце.",
  },
  {
    icon: <CircleDollarSign width={40} height={40} strokeWidth={1} />,
    title: "Ценообразование",
    description:
      "Предлагаем решения под любой бюджет без потери качества. Платите за результат, а не за часы работы команды.",
  },
];

function AdvantageItemsList() {
  return (
    <div className="w-full flex gap-5">
      {data.map((item) => (
        <AdvantageItem
          key={item.title}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default AdvantageItemsList;
