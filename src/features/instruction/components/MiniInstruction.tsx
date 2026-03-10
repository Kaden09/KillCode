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
    <div ref={ref} className="relative w-full max-w-500 min-[700px]:hidden">
      <svg
        viewBox="0 0 45 103"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="circle-group">
          <circle
            cx="16"
            cy="18"
            r="3"
            fill="white"
            className={`opacity-0  ${inView && "animate-fade-in-from-small"}`}
            style={{ filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))" }}
          />
          <foreignObject
            x="0"
            y="5"
            width="40"
            height="30"
            className={`opacity-0 ${inView && "animate-fade-in-top-instruction"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex flex-col items-center justify-start w-8 text-white text-center h-full">
              <h3 className="font-semibold text-[2px]">
                {i18n[language].instruction.steps.firstStep.title}
              </h3>
              <p className="text-secondary-font text-[1.5px]">
                {i18n[language].instruction.steps.firstStep.description}
              </p>
            </div>
          </foreignObject>
        </g>
        <g className="circle-group">
          <circle
            cx="33"
            cy="40"
            r="3"
            fill="white"
            className={`opacity-0 ${inView && "animate-fade-in-from-small"}`}
            style={{
              animationDelay: "0.2s",
              filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
            }}
          />
          <foreignObject
            x="21"
            y="27"
            width="40"
            height="30"
            className={`opacity-0 ${inView && "animate-fade-in-top-instruction"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex flex-col items-center w-6 justify-start text-white text-center h-full">
              <h3 className="font-semibold text-[2px]">
                {i18n[language].instruction.steps.secondStep.title}
              </h3>
              <p className="text-secondary-font text-[1.5px]">
                {i18n[language].instruction.steps.secondStep.description}
              </p>
            </div>
          </foreignObject>
        </g>
        <g className="circle-group">
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
          <foreignObject
            x="0"
            y="45"
            width="40"
            height="30"
            className={`opacity-0 ${inView && "animate-fade-in-top-instruction"}`}
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex flex-col items-center w-6 justify-start text-white text-center h-full">
              <h3 className="font-semibold text-[2px]">
                {i18n[language].instruction.steps.tertiaryStep.title}
              </h3>
              <p className="text-secondary-font text-[1.5px]">
                {i18n[language].instruction.steps.tertiaryStep.description}
              </p>
            </div>
          </foreignObject>
        </g>
        <g className="circle-group">
          <circle
            cx="33"
            cy="75"
            r="3"
            fill="white"
            className={`opacity-0 ${inView && "animate-fade-in-from-small"}`}
            style={{
              animationDelay: "0.6s",
              filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
            }}
          />
          <foreignObject
            x="21"
            y="62"
            width="40"
            height="30"
            className={`opacity-0 ${inView && "animate-fade-in-top-instruction"}`}
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex flex-col items-center w-6 justify-start text-white text-center h-full">
              <h3 className="font-semibold text-[2px]">
                {i18n[language].instruction.steps.fourthStep.title}
              </h3>
              <p className="text-secondary-font text-[1.5px]">
                {i18n[language].instruction.steps.fourthStep.description}
              </p>
            </div>
          </foreignObject>
        </g>
        <g className="circle-group">
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
          <foreignObject
            x="1"
            y="82"
            width="40"
            height="30"
            className={`opacity-0 ${inView && "animate-fade-in-top-instruction"}`}
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex flex-col items-center justify-start w-6 text-white text-center h-full">
              <h3 className="font-semibold text-[2px]">
                {i18n[language].instruction.steps.fifthStep.title}
              </h3>
              <p className="text-secondary-font text-[1.5px]">
                {i18n[language].instruction.steps.fifthStep.description}
              </p>
            </div>
          </foreignObject>
        </g>
        <path
          d="M16 20 Q16 35 29 39"
          stroke="#626262"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.1s" }}
        />
        <path
          d="M33 43 Q29 54 17 56"
          stroke="#626262"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.3s" }}
        />
        <path
          d="M13 60 Q18 74 29 75"
          stroke="#626262"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.5s" }}
        />
        <path
          d="M33 77.5 Q29 91 17 94"
          stroke="#626262"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.7s" }}
        />
      </svg>
    </div>
  );
}

export default MiniInstruction;
