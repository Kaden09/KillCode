import { I18nContext } from "@/shared/context/i18n-context";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";

function Instruction() {
  const { language, i18n } = useContext(I18nContext);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="relative w-full max-w-500 hidden min-[700px]:block"
    >
      <svg
        viewBox="0 0 180 100"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="circle-group">
          <circle
            cx="22"
            cy="57"
            r="3"
            fill="white"
            className={`opacity-0  ${inView && "animate-fade-in-from-small"}`}
            style={{ filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))" }}
          />
          <foreignObject
            x="3"
            y="62"
            width="40"
            height="30"
            className={`opacity-0 ${inView && "animate-fade-in-bottom-instruction"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex flex-col items-center justify-start text-white text-center h-full">
              <h3 className="font-semibold text-[3px]">
                {i18n[language].instruction.steps.firstStep.title}
              </h3>
              <p className="text-secondary-font text-[2px] leading-0.75 mt-px">
                {i18n[language].instruction.steps.firstStep.description}
              </p>
            </div>
          </foreignObject>
        </g>
        <g className="circle-group">
          <circle
            cx="53"
            cy="32"
            r="3"
            fill="white"
            className={`opacity-0 ${inView && "animate-fade-in-from-small"}`}
            style={{
              animationDelay: "0.2s",
              filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
            }}
          />
          <foreignObject
            x="33"
            y="14"
            width="40"
            height="30"
            className={`opacity-0 ${inView && "animate-fade-in-top-instruction"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className=" text-white text-center">
              <h3 className="font-semibold text-[3px]">
                {i18n[language].instruction.steps.secondStep.title}
              </h3>
              <p className="text-secondary-font text-[2px] leading-0.75 mt-px">
                {i18n[language].instruction.steps.secondStep.description}
              </p>
            </div>
          </foreignObject>
        </g>
        <g className="circle-group">
          <circle
            cx="83"
            cy="51"
            r="3"
            fill="white"
            className={`opacity-0 ${inView && "animate-fade-in-from-small"}`}
            style={{
              animationDelay: "0.4s",
              filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
            }}
          />
          <foreignObject
            x="62"
            y="57"
            width="42"
            height="30"
            className={`opacity-0 ${inView && "animate-fade-in-bottom-instruction"}`}
            style={{ animationDelay: "0.5s" }}
          >
            <div className=" text-white text-center">
              <h3 className="font-semibold text-[3px]">
                {i18n[language].instruction.steps.tertiaryStep.title}
              </h3>
              <p className="text-secondary-font text-[2px] leading-0.75 mt-px">
                {i18n[language].instruction.steps.tertiaryStep.description}
              </p>
            </div>
          </foreignObject>
        </g>
        <g className="circle-group">
          <circle
            cx="123"
            cy="37"
            r="3"
            fill="white"
            className={`opacity-0 ${inView && "animate-fade-in-from-small"}`}
            style={{
              animationDelay: "0.6s",
              filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
            }}
          />
          <foreignObject
            x="103"
            y="22"
            width="40"
            height="30"
            className={`opacity-0 ${inView && "animate-fade-in-top-instruction"}`}
            style={{ animationDelay: "0.6s" }}
          >
            <div className=" text-white text-center">
              <h3 className="font-semibold text-[3px]">
                {i18n[language].instruction.steps.fourthStep.title}
              </h3>
              <p className="text-secondary-font text-[2px] leading-0.75 mt-px">
                {i18n[language].instruction.steps.fourthStep.description}
              </p>
            </div>
          </foreignObject>
        </g>
        <g className="circle-group">
          <circle
            cx="159"
            cy="55"
            r="3"
            fill="white"
            className={`opacity-0 ${inView && "animate-fade-in-from-small"}`}
            style={{
              animationDelay: "0.8s",
              filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
            }}
          />
          <foreignObject
            x="139"
            y="60.5"
            width="40"
            height="30"
            className={`opacity-0 ${inView && "animate-fade-in-bottom-instruction"}`}
            style={{ animationDelay: "0.8s" }}
          >
            <div className=" text-white text-center">
              <h3 className="font-semibold text-[3px]">
                {i18n[language].instruction.steps.fifthStep.title}
              </h3>
              <p className="text-secondary-font text-[2px] leading-0.75 mt-px">
                {i18n[language].instruction.steps.fifthStep.description}
              </p>
            </div>
          </foreignObject>
        </g>
        <path
          d="M19 55 Q16 53 15 50"
          stroke="#f32b24"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-draw-red-line"}`}
          style={{ animationDelay: "0.9s" }}
        />
        <path
          d="M23 53 C30 37 43 47 51 35.4"
          stroke="#626262"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-draw-line"}`}
          style={{ animationDelay: "0.1s" }}
        />
        <path
          d="M55 35.5 Q63 49 79 51"
          stroke="#626262"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-draw-line"}`}
          style={{ animationDelay: "0.3s" }}
        />
        <path
          d="M87 51 Q114 50 121 40.2"
          stroke="#626262"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-draw-line"}`}
          style={{ animationDelay: "0.5s" }}
        />
        <path
          d="M125 39.9 Q138 55 155 55"
          stroke="#626262"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-draw-line"}`}
          style={{ animationDelay: "0.7s" }}
        />
      </svg>
      <div
        className={`absolute min-[700px]:left-[1.25%] min-[700px]:top-[44%] -rotate-20 inline-block min-[700px]:text-[8px] min-[800px]:left-[2%] min-[800px]:top-[45%] min-[900px]:left-[3%] min-[1000px]:text-[10px] min-[1000px]:left-[2.25%] min-[1000px]:top-[45%] min-[1024px]:left-[1.5%] min-[1100px]:left-[2%] min-[1300px]:left-[2.25%] min-[1300px]:top-[45%] min-[1300px]:text-xs min-[1500px]:left-[3%] min-[1500px]:top-[46%] min-[1600px]:text-sm min-[1700px]:left-[2.5%] min-[1700px]:text-base min-[1800px]:left-[3.25%] min-[1900px]:text-lg bg-secondary-bg rounded-full p-1 lg:py-2 px-2 lg:px-4 border border-contrast text-contrast opacity-0 ${inView && "animate-fade-in-top"}`}
        style={{ animationDelay: "1.1s" }}
      >
        <h3>{i18n[language].instruction.currentStep}</h3>
      </div>
    </div>
  );
}

export default Instruction;
