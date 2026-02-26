import { CircleDollarSign, Shield, Zap } from "lucide-react";
import type { IAdvantageItem } from "./AdvantageItem";
import AdvantageItem from "./AdvantageItem";
import { useInView } from "react-intersection-observer";

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
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // Срабатывает только один раз
  });

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
      <div
        ref={ref}
        className={`absolute top-[20%] w-[60%] blur-[100px] h-40 rounded-full bg-white/5 opcity-0 ${inView && "animate-fade-in-bottom-100"}`}
      ></div>
    </div>
  );
}

export default AdvantageItemsList;
