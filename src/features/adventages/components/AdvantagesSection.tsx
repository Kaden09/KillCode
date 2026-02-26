import { useInView } from "react-intersection-observer";
import AdvantageItemsList from "./AdvantageItemsList";
import { useContext } from "react";
import { I18nContext } from "@/shared/context/i18n-context";

function AdvantagesSection() {
  const { language, i18n } = useContext(I18nContext);
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
          {i18n[language].advantages.title.firstPart}{" "}
          <span className="text-contrast">
            {i18n[language].advantages.title.secondPart}
          </span>
        </h2>
        <p
          ref={ref}
          className={`text-secondary-font text-center max-w-200 text-xl opacity-0 ${inView && "animate-fade-in-bottom-1s"}`}
          style={{ animationDelay: "0.1s" }}
        >
          {i18n[language].advantages.subtitle}
        </p>
      </div>
      <AdvantageItemsList />
    </div>
  );
}

export default AdvantagesSection;
