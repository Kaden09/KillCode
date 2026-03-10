import { I18nContext } from "@/shared/context/i18n-context";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import GrowthScheme from "./GrowthScheme";

function GrowthSection() {
  const { language, i18n } = useContext(I18nContext);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="flex flex-col justify-center items-center gap-7 sm:gap-14 md:gap-16 lg:gap-20 mt-20 mb-40 sm:mb-50 md:mb-60">
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        <h2
          ref={ref}
          className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-semibold opacity-0 ${inView && "animate-fade-in-bottom-1s"}`}
        >
          {i18n[language].growth.title.firstPart}{" "}
          <span className="text-contrast">
            {i18n[language].growth.title.secondPart}
          </span>
        </h2>
        <p
          ref={ref}
          className={`text-secondary-font text-center leading-4 sm:leading-6 md:leading-7 max-w-200 text-xs sm:text-base md:text-lg opacity-0 ${inView && "animate-fade-in-bottom-1s"}`}
          style={{ animationDelay: "0.1s" }}
        >
          {i18n[language].growth.subtitle}
        </p>
      </div>
      <GrowthScheme />
    </div>
  );
}

export default GrowthSection;
