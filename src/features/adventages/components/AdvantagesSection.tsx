import { useInView } from "react-intersection-observer";
import AdvantageItemsList from "./AdvantageItemsList";
import { useContext } from "react";
import { I18nContext } from "@/shared/context/i18n-context";

function AdvantagesSection() {
  const { language, i18n } = useContext(I18nContext);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      id="advantages"
      className="flex flex-col justify-center items-center gap-11 sm:gap-13 md:gap-15 lg:gap-17 py-30 sm:py-40 md:py-50"
    >
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        <h2
          ref={ref}
          className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-semibold opacity-0 ${inView && "animate-fade-in-bottom-1s"}`}
        >
          {i18n[language].advantages.title.firstPart}{" "}
          <span className="text-contrast">
            {i18n[language].advantages.title.secondPart}
          </span>
        </h2>
        <p
          ref={ref}
          className={`text-secondary-font leading-4 sm:leading-6 md:leading-7 text-center max-w-200 text-xs sm:text-base md:text-lg opacity-0 ${inView && "animate-fade-in-bottom-1s"}`}
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
