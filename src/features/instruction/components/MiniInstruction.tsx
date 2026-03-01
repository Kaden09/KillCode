import { I18nContext } from "@/shared/context/i18n-context";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";

function MiniInstruction() {
  const { language, i18n } = useContext(I18nContext);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="relative w-full max-w-500 min-[550px]:hidden">
      <svg
        viewBox="0 0 45 103"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="13"
          cy="18"
          r="3"
          fill="white"
          className={`opacity-0  ${inView && "animate-fade-in-from-small"}`}
          style={{ filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))" }}
        />
        <circle
          cx="35"
          cy="40"
          r="3"
          fill="white"
          className={`opacity-0 ${inView && "animate-fade-in-from-small"}`}
          style={{
            animationDelay: "0.2s",
            filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
          }}
        />
        <circle
          cx="13"
          cy="58"
          r="3"
          fill="white"
          className={`opacity-0 ${inView && "animate-fade-in-from-small"}`}
          style={{
            animationDelay: "0.4s",
            filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
          }}
        />
        <circle
          cx="35"
          cy="75"
          r="3"
          fill="white"
          className={`opacity-0 ${inView && "animate-fade-in-from-small"}`}
          style={{
            animationDelay: "0.6s",
            filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
          }}
        />
        <circle
          cx="13"
          cy="95"
          r="3"
          fill="white"
          className={`opacity-0 ${inView && "animate-fade-in-from-small"}`}
          style={{
            animationDelay: "0.8s",
            filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
          }}
        />
        <path
          d="M14 22 Q16 35 31 39"
          stroke="#626262"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.1s" }}
        />
        <path
          d="M33 43 Q30 50 17 56"
          stroke="#626262"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.3s" }}
        />
        <path
          d="M15 61 Q20 70 31 74"
          stroke="#626262"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.5s" }}
        />
        <path
          d="M34 78.5 Q29 91 17 94"
          stroke="#626262"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.7s" }}
        />
      </svg>

      <div className="absolute top-[3%] min-[320px]:top-[1%] min-[375px]:top-[3%] min-[400px]:top-[4%] min-[525px]:top-[6%] right-[2%] min-[320px]:right-[10%] min-[340px]:right-[14%] min-[375px]:right-[20%] min-[400px]:right-[26%] min-[480px]:right-[33%] min-[525px]:right-[36%] flex flex-col gap-2 items-center justify-center w-90">
        <h2
          className={`font-semibold text-xs min-[320px]:text-sm min-[400px]:text-base opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.2s" }}
        >
          {i18n[language].instruction.steps.firstStep.title}
        </h2>
        <p
          className={`text-secondary-font text-[10px] min-[320px]:text-xs text-sm w-50 text-center opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.3s" }}
        >
          {i18n[language].instruction.steps.firstStep.description}
        </p>
      </div>

      <div className="absolute top-[25%] min-[320px]:top-[23%] min-[340px]:top-[24%] min-[375px]:top-[25%] min-[400px]:top-[26%] min-[525px]:top-[28%] left-[5%] min-[320px]:left-[14%] min-[340px]:left-[16%] min-[375px]:left-[24%] min-[400px]:left-[30%] min-[480px]:left-[38%] min-[525px]:left-[42%] flex flex-col gap-2 items-center justify-center w-90">
        <h2
          className={`font-semibold text-xs min-[320px]:text-sm min-[400px]:text-base opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.4s" }}
        >
          {i18n[language].instruction.steps.secondStep.title}
        </h2>
        <p
          className={`text-secondary-font text-[10px] min-[320px]:text-xs text-sm w-50 text-center opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.5s" }}
        >
          {i18n[language].instruction.steps.secondStep.description}
        </p>
      </div>

      <div className="absolute bottom-[50%] min-[320px]:bottom-[52%] min-[375px]:bottom-[50%] min-[400px]:bottom-[50%] right-[2%] min-[320px]:right-[10%] min-[340px]:right-[14%] min-[375px]:right-[22%] min-[400px]:right-[28%] min-[480px]:right-[35%] min-[525px]:right-[38%] flex flex-col gap-2 items-center justify-center w-90">
        <h2
          className={`font-semibold text-xs min-[320px]:text-sm min-[400px]:text-base opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.6s" }}
        >
          {i18n[language].instruction.steps.tertiaryStep.title}
        </h2>
        <p
          className={`text-secondary-font text-[10px] min-[320px]:text-xs w-50 text-center opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.7s" }}
        >
          {i18n[language].instruction.steps.tertiaryStep.description}
        </p>
      </div>

      <div className="absolute bottom-[31%] min-[320px]:bottom-[33%] min-[375px]:bottom-[33%] left-[8%] min-[320px]:left-[18%] min-[340px]:left-[20%] min-[375px]:left-[26%] min-[400px]:left-[32%] min-[480px]:left-[38%] min-[525px]:left-[42%] flex flex-col gap-1 items-center justify-center w-90">
        <h2
          className={`font-semibold text-xs min-[320px]:text-sm min-[400px]:text-base opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.8s" }}
        >
          {i18n[language].instruction.steps.fourthStep.title}
        </h2>
        <p
          className={`text-secondary-font text-[10px] min-[320px]:text-xs w-40 text-center opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.9s" }}
        >
          {i18n[language].instruction.steps.fourthStep.description}
        </p>
      </div>

      <div className="absolute bottom-[12%] min-[320px]:bottom-[15%] min-[375px]:bottom-[13%] right-[4%] min-[320px]:right-[11%] min-[340px]:right-[15%] min-[375px]:right-[22%] min-[400px]:right-[26%] min-[480px]:right-[33%] min-[525px]:right-[36%] flex flex-col gap-1 items-center justify-center w-90">
        <h2
          className={`font-semibold text-xs min-[320px]:text-sm min-[400px]:text-base opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "1s" }}
        >
          {i18n[language].instruction.steps.fifthStep.title}
        </h2>
        <p
          className={`text-secondary-font text-[10px] min-[320px]:text-xs w-50 text-center opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "1.1s" }}
        >
          {i18n[language].instruction.steps.fifthStep.description}
        </p>
      </div>
    </div>
  );
}

export default MiniInstruction;
