import { useInView } from "react-intersection-observer";
import AdvantageItemsList from "./AdvantageItemsList";

function AdvantagesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // Срабатывает только один раз
  });

  return (
    <div
      id="advantages"
      className="flex flex-col justify-center items-center gap-17 py-50"
    >
      <div className="flex flex-col gap-6">
        <h2
          ref={ref}
          className={`text-6xl text-center font-semibold opacity-0 ${inView && "animate-fade-in-bottom-1s"}`}
          style={{ animationDelay: "" }}
        >
          Наши <span className="text-contrast">преимущества</span>
        </h2>
        <p
          ref={ref}
          className={`text-secondary-font text-center max-w-200 text-xl opacity-0 ${inView && "animate-fade-in-bottom-1s"}`}
          style={{ animationDelay: "0.1s" }}
        >
          С нами вы не будете думать о серверах, багах и технических
          ограничениях - мы берём все эти вопросы на себя.
        </p>
      </div>
      <AdvantageItemsList />
    </div>
  );
}

export default AdvantagesSection;
