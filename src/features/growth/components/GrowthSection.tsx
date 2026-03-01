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
    <div className="flex flex-col justify-center items-center gap-15 sm:gap-17 md:gap-19 lg:gap-21 mt-20 mb-40 sm:mb-50 md:mb-70">
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
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
          className={`text-secondary-font text-center max-w-200 text-sm sm:text-base md:text-lg lg:text-xl opacity-0 ${inView && "animate-fade-in-bottom-1s"}`}
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
