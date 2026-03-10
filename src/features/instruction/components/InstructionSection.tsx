import { useInView } from "react-intersection-observer";
import Instruction from "./Instruction";
import { useContext } from "react";
import { I18nContext } from "@/shared/context/i18n-context";
import MiniInstruction from "./MiniInstruction";

function InstructionSection() {
  const { language, i18n } = useContext(I18nContext);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // Срабатывает только один раз
  });

  return (
    <div
      id="instruction"
      className="relative flex flex-col justify-center items-center gap-15 sm:gap-20 md:gap-0 py-10 w-full"
    >
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
        <h2
          ref={ref}
          className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-semibold opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "" }}
        >
          <span className="text-contrast">
            {i18n[language].instruction.title.firstPart}
          </span>{" "}
          {i18n[language].instruction.title.secondPart}
        </h2>
        <p
          ref={ref}
          className={`text-secondary-font text-center leading-4 sm:leading-6 md:leading-7 max-w-160 text-xs sm:text-base md:text-lg opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.1s" }}
        >
          {i18n[language].instruction.subtitle}
        </p>
      </div>
      <Instruction />
      <MiniInstruction />
    </div>
  );
}

export default InstructionSection;
