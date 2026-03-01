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
    <div
      ref={ref}
      className="relative w-full max-w-500 hidden min-[550px]:block"
    >
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
        className={`absolute min-[550px]:-left-[2%] min-[550px]:top-[37%] -rotate-20 inline-block min-[550px]:text-[8px] min-[1000px]:text-[10px] min-[1000px]:top-[42%] min-[1300px]:top-[47%] min-[1300px]:text-xs min-[1600px]:text-sm min-[1700px]:-left-[1%] min-[1700px]:text-base min-[1900px]:text-lg bg-secondary-bg rounded-full p-1 md:py-2 px-4 border border-contrast text-contrast opacity-0 ${inView && "animate-fade-in-top"}`}
        style={{ animationDelay: "1.2s" }}
      >
        <h3>{i18n[language].instruction.currentStep}</h3>
      </div>
      <div className="absolute min-[550px]:-bottom-[14%] min-[550px]:right-[53%] min-[600px]:right-[58%] min-[700px]:right-[63%] min-[800px]:right-[67%] min-[800px]:-bottom-[17%] min-[900px]:right-[70%] min-[1000px]:right-[72%] min-[1000px]:-bottom-[13%] min-[1100px]:right-[74%] min-[1250px]:right-[76%] min-[1250px]:-bottom-[8%] min-[1400px]:right-[78%] min-[1400px]:-bottom-[5%] min-[1600px]:right-[80%] min-[1800px]:right-[81%] min-[2050px]:right-[82.5%] min-[2050px]:-bottom-[1%] min-[2300px]:right-[83%] min-[2300px]:-bottom-[2%] flex flex-col gap-2 items-center justify-center w-90">
        <h2
          className={`font-semibold min-[550px]:text-[10px] min-[800px]:text-[12px] min-[1100px]:text-base min-[1600px]:text-lg min-[1700px]:text-xl opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.2s" }}
        >
          {i18n[language].instruction.steps.firstStep.title}
        </h2>
        <p
          className={`text-secondary-font min-[550px]:w-40 min-[550px]:text-[8px] min-[800px]:text-[10px] min-[1100px]:text-xs min-[1100px]:w-50 min-[1600px]:text-sm min-[1600px]:w-60 min-[1700px]:text-base text-center opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.3s" }}
        >
          {i18n[language].instruction.steps.firstStep.description}
        </p>
      </div>

      <div className="absolute min-[550px]:-top-[30%] min-[550px]:right-[39%] min-[600px]:-top-[25%] min-[600px]:right-[41%] min-[700px]:right-[45%] min-[800px]:right-[48%] min-[900px]:right-[50%] min-[1000px]:right-[53%] min-[1000px]:-top-[15%] min-[1100px]:right-[54%] min-[1250px]:right-[56%] min-[1400px]:right-[58%] min-[1400px]:-top-[10%] min-[1600px]:right-[60%] min-[1800px]:right-[61%] min-[1900px]:right-[62%] min-[2050px]:right-[63%] min-[2050px]:-top-[7%] min-[2300px]:right-[63%] min-[2300px]:-top-[7%] flex flex-col gap-2 items-center justify-center w-90">
        <h2
          className={`font-semibold min-[550px]:text-[10px] min-[800px]:text-[12px] min-[1100px]:text-base min-[1600px]:text-lg min-[1700px]:text-xl opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.4s" }}
        >
          {i18n[language].instruction.steps.secondStep.title}
        </h2>
        <p
          className={`text-secondary-font min-[550px]:w-40 min-[550px]:text-[8px] min-[800px]:text-[10px] min-[1100px]:text-xs min-[1100px]:w-50 min-[1600px]:text-sm min-[1600px]:w-60 min-[1700px]:text-base text-center opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.5s" }}
        >
          {i18n[language].instruction.steps.secondStep.description}
        </p>
      </div>

      <div className="absolute min-[550px]:top-[70%] min-[550px]:right-[22%] min-[600px]:right-[25%] min-[700px]:right-[28%] min-[800px]:right-[30%] min-[900px]:right-[33%] min-[1000px]:right-[36%] min-[1100px]:right-[37%] min-[1250px]:right-[39%] min-[1400px]:right-[41%] min-[1600px]:right-[43%] min-[1800px]:right-[45%] min-[2050px]:right-[46%] min-[2300px]:right-[46%] flex flex-col gap-2 items-center justify-center w-90">
        <h2
          className={`font-semibold min-[550px]:text-[10px] min-[800px]:text-[12px] min-[1100px]:text-base min-[1600px]:text-lg min-[1700px]:text-xl opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.6s" }}
        >
          {i18n[language].instruction.steps.tertiaryStep.title}
        </h2>
        <p
          className={`text-secondary-font min-[550px]:w-40 min-[550px]:text-[8px] min-[800px]:text-[10px] min-[1100px]:text-xs min-[1100px]:w-50 min-[1600px]:text-sm min-[1600px]:w-60 min-[1700px]:text-base text-center opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.7s" }}
        >
          {i18n[language].instruction.steps.tertiaryStep.description}
        </p>
      </div>

      <div className="absolute min-[550px]:bottom-[88%] min-[550px]:left-[33%] min-[600px]:left-[36%] min-[700px]:left-[39%] min-[800px]:left-[42%] min-[900px]:left-[45%] min-[1000px]:left-[47%] min-[1100px]:left-[49%] min-[1100px]:bottom-[85%] min-[1250px]:left-[51%] min-[1400px]:left-[53%] min-[1600px]:left-[55%] min-[1800px]:left-[56%] min-[2050px]:left-[57%] min-[2050px]:bottom-[82%] min-[2300px]:left-[58%] flex flex-col gap-2 items-center justify-center w-90">
        <h2
          className={`font-semibold min-[550px]:text-[10px] min-[800px]:text-[12px] min-[1100px]:text-base min-[1600px]:text-lg min-[1700px]:text-xl opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.8s" }}
        >
          {i18n[language].instruction.steps.fourthStep.title}
        </h2>
        <p
          className={`text-secondary-font min-[550px]:w-40 min-[550px]:text-[8px] min-[800px]:text-[10px] min-[1100px]:text-xs min-[1100px]:w-50 min-[1600px]:text-sm min-[1600px]:w-60 min-[1700px]:text-base text-center opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.9s" }}
        >
          {i18n[language].instruction.steps.fourthStep.description}
        </p>
      </div>

      <div className="absolute min-[550px]:top-[80%] min-[550px]:left-[55%] min-[600px]:left-[58%] min-[700px]:left-[61%] min-[800px]:left-[64%] min-[900px]:left-[67%] min-[1000px]:left-[69%] min-[1100px]:left-[71%] min-[1250px]:left-[73%] min-[1400px]:left-[75%] min-[1600px]:left-[77%] min-[1800px]:left-[78%] min-[2050px]:left-[80%] min-[1900px]:left-[79%] min-[2050px]:top-[78%] min-[2300px]:left-[80%] flex flex-col gap-2 items-center justify-center w-90">
        <h2
          className={`font-semibold min-[550px]:text-[10px] min-[800px]:text-[12px] min-[1100px]:text-base min-[1600px]:text-lg min-[1700px]:text-xl opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "1s" }}
        >
          {i18n[language].instruction.steps.fifthStep.title}
        </h2>
        <p
          className={`text-secondary-font min-[550px]:w-40 min-[550px]:text-[8px] min-[800px]:text-[10px] min-[1100px]:text-xs min-[1100px]:w-50 min-[1600px]:text-sm min-[1600px]:w-60 min-[1700px]:text-base text-center opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "1.1s" }}
        >
          {i18n[language].instruction.steps.fifthStep.description}
        </p>
      </div>
    </div>
  );
}

export default Instruction;
