import { useInView } from "react-intersection-observer";
import Instruction from "./Instruction";
import { useContext } from "react";
import { I18nContext } from "@/shared/context/i18n-context";

function InstructionSection() {
  const { language, i18n } = useContext(I18nContext);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // Срабатывает только один раз
  });

  return (
    <div
      id="instruction"
      className="relative flex flex-col justify-center items-center gap-30 py-10 w-full"
    >
      <div className="flex flex-col gap-6">
        <h2
          ref={ref}
          className={`text-6xl text-center font-semibold opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "" }}
        >
          <span className="text-contrast">
            {i18n[language].instruction.title.firstPart}
          </span>{" "}
          {i18n[language].instruction.title.secondPart}
        </h2>
        <p
          ref={ref}
          className={`text-secondary-font text-center max-w-160 text-xl opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.1s" }}
        >
          {i18n[language].instruction.subtitle}
        </p>
      </div>
      <Instruction />
    </div>
  );
}

export default InstructionSection;
