import { I18nContext } from "@/shared/context/i18n-context";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";

function Instruction() {
  const { language, i18n } = useContext(I18nContext);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // Срабатывает только один раз
  });

  return (
    <div ref={ref} className="relative w-full max-w-500">
      <svg
        viewBox="0 0 180 50"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="15"
          cy="35"
          r="3"
          fill="white"
          className={`opacity-0  ${inView && "animate-fade-in-from-small"}`}
          style={{ filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))" }}
        />
        <circle
          cx="50"
          cy="10"
          r="3"
          fill="white"
          className={`opacity-0 ${inView && "animate-fade-in-from-small"}`}
          style={{
            animationDelay: "0.2s",
            filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
          }}
        />
        <circle
          cx="80"
          cy="29"
          r="3"
          fill="white"
          className={`opacity-0 ${inView && "animate-fade-in-from-small"}`}
          style={{
            animationDelay: "0.4s",
            filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
          }}
        />
        <circle
          cx="120"
          cy="15"
          r="3"
          fill="white"
          className={`opacity-0 ${inView && "animate-fade-in-from-small"}`}
          style={{
            animationDelay: "0.6s",
            filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
          }}
        />
        <circle
          cx="160"
          cy="33"
          r="3"
          fill="white"
          className={`opacity-0 ${inView && "animate-fade-in-from-small"}`}
          style={{
            animationDelay: "0.8s",
            filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
          }}
        />
        <path
          d="M11 33 Q7 32 6 27"
          stroke="#f32b24"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-draw-red-line"}`}
          style={{ animationDelay: "1s" }}
        />
        <path
          d="M17 31 C27 15 40 25 48 13.4"
          stroke="#626262"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-draw-line"}`}
          style={{ animationDelay: "0.1s" }}
        />
        <path
          d="M52 13.5 Q60 27 76 29"
          stroke="#626262"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-draw-line"}`}
          style={{ animationDelay: "0.3s" }}
        />
        <path
          d="M84 29 Q111 28 117 17.8"
          stroke="#626262"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-draw-line"}`}
          style={{ animationDelay: "0.5s" }}
        />
        <path
          d="M123 17.9 Q135 33 156 33"
          stroke="#626262"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-draw-line"}`}
          style={{ animationDelay: "0.7s" }}
        />
      </svg>
      <div
        className={`absolute -left-[2%] top-[46%] -rotate-20 inline-block text-[8px] sm:text-sm md:text-base bg-secondary-bg rounded-full p-.5 md:py-2 px-4 border border-contrast text-contrast opacity-0 ${inView && "animate-fade-in-top"}`}
        style={{ animationDelay: "1.2s" }}
      >
        <h3>{i18n[language].instruction.currentStep}</h3>
      </div>
      <div className="absolute bottom-0 min-[400px]:-left-34 min-[600px]:-left-32 min-[800px]:-left-26 min-[1000px]:-left-23 min-[1300px]:-left-18 min-[1500px]:-left-15 min-[1700px]:-left-12 min-[1800px]:-left-9 flex flex-col gap-2 items-center justify-center w-90">
        <h2
          className={`font-semibold text-sm sm:text-lg md:text-2xl opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.2s" }}
        >
          {i18n[language].instruction.steps.firstStep.title}
        </h2>
        <p
          className={`text-secondary-font text-xs sm:text-sm md:text-base text-center opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.3s" }}
        >
          {i18n[language].instruction.steps.firstStep.description}
        </p>
      </div>
      <div className="absolute -top-12 min-[400px]:-left-34 min-[600px]:left-0 min-[800px]:left-10 min-[1000px]:left-18 min-[1300px]:left-47 min-[1500px]:left-55 min-[1700px]:left-63 min-[1800px]:left-76 flex flex-col gap-2 items-center justify-center w-90">
        <h2
          className={`font-semibold text-sm sm:text-lg md:text-2xl opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.4s" }}
        >
          {i18n[language].instruction.steps.secondStep.title}
        </h2>
        <p
          className={`text-secondary-font text-xs sm:text-sm md:text-base text-center opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.5s" }}
        >
          {i18n[language].instruction.steps.secondStep.description}
        </p>
      </div>
      <div className="absolute bottom-14 left-[35.5%] flex flex-col gap-2 items-center justify-center w-90">
        <h2
          className={`font-semibold text-sm sm:text-lg md:text-2xl opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.6s" }}
        >
          {i18n[language].instruction.steps.tertiaryStep.title}
        </h2>
        <p
          className={`text-secondary-font text-xs sm:text-sm md:text-base text-center opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.7s" }}
        >
          {i18n[language].instruction.steps.tertiaryStep.description}
        </p>
      </div>
      <div className="absolute top-5 right-[24%] flex flex-col gap-2 items-center justify-center w-90">
        <h2
          className={`font-semibold text-sm sm:text-lg md:text-2xl opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.8s" }}
        >
          {i18n[language].instruction.steps.fourthStep.title}
        </h2>
        <p
          className={`text-secondary-font text-xs sm:text-sm md:text-base text-center opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.9s" }}
        >
          {i18n[language].instruction.steps.fourthStep.description}
        </p>
      </div>
      <div className="absolute bottom-6 right-[2%] flex flex-col gap-2 items-center justify-center w-90">
        <h2
          className={`font-semibold text-sm sm:text-lg md:text-2xl opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "1s" }}
        >
          {i18n[language].instruction.steps.fifthStep.title}
        </h2>
        <p
          className={`text-secondary-font text-xs sm:text-sm md:text-base text-center opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "1.1s" }}
        >
          {i18n[language].instruction.steps.fifthStep.description}
        </p>
      </div>
    </div>
  );
}

export default Instruction;
