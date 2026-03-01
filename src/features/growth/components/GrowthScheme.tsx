import { I18nContext } from "@/shared/context/i18n-context";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";

function GrowthScheme() {
  const { language, i18n } = useContext(I18nContext);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="w-full hidden min-[1000px]:block">
      <div
        ref={ref}
        className={`relative w-0 opacity-0 ${inView && "animate-fade-in-growth-line"}`}
      >
        <div className="absolute top-0 left-0 h-2.5 w-full bg-linear-to-r from-[#141414] to-contrast rounded-full blur-[20px]" />
        <div className="absolute top-0.5 left-0 h-1.5 w-[99.5%] bg-linear-to-r from-[#141414] to-contrast rounded-full blur-md" />
        <div className="absolute top-0.75 left-0 h-1 w-[99%] bg-linear-to-r from-[#141414] to-contrast rounded-full blur-[6px]" />
        <div className="absolute top-0.75 left-0 h-1 w-[98.5%] bg-linear-to-r from-[#141414] to-contrast rounded-full blur-[3px]" />
      </div>
      <div
        ref={ref}
        className="flex justify-between mt-10 ml-10 min-[1000px]:mr-55 min-[1200px]:mr-60 min-[1300px]:mr-73 min-[1500px]:mr-77 min-[1700px]:mr-88"
      >
        <div
          className={`h-20 w-0.75 rounded-full bg-linear-to-b from-contrast to-[#141414] opacity-0 ${inView && "animate-fade-in-top"}`}
        />
        <div
          className={`h-20 w-0.75 rounded-full bg-linear-to-b from-contrast to-[#141414] opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.2s" }}
        />
        <div
          className={`h-20 w-0.75 rounded-full bg-linear-to-b from-contrast to-[#141414] opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.3s" }}
        />
        <div
          className={`h-20 w-0.75 rounded-full bg-linear-to-b from-contrast to-[#141414] opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.4s" }}
        />
      </div>
      <div ref={ref} className="flex justify-around items-start mt-5">
        <div
          className={`flex justify-center flex-col gap-3 opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="min-[1400px]:text-xl min-[1700px]:text-2xl font-semibold">
            {i18n[language].growth.firstStep.title}
          </h2>
          <p className="text-secondary-font text-sm min-[1000px]:text-xs min-[1200px]:text-sm min-[1000px]:w-50 min-[1250px]:w-70 min-[1700px]:w-80">
            {i18n[language].growth.firstStep.desc}
          </p>
        </div>
        <div
          className={`flex justify-center flex-col gap-3 opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="min-[1400px]:text-xl min-[1700px]:text-2xl font-semibold">
            {i18n[language].growth.secondStep.title}
          </h2>
          <p className="text-secondary-font text-sm min-[1000px]:text-xs min-[1200px]:text-sm min-[1000px]:w-50 min-[1250px]:w-70 min-[1700px]:w-80">
            {i18n[language].growth.secondStep.desc}
          </p>
        </div>
        <div
          className={`flex justify-center flex-col gap-3 opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.4s" }}
        >
          <h2 className="min-[1400px]:text-xl min-[1700px]:text-2xl font-semibold">
            {i18n[language].growth.thirdStep.title}
          </h2>
          <p className="text-secondary-font text-sm min-[1000px]:text-xs min-[1200px]:text-sm min-[1000px]:w-50 min-[1250px]:w-70 min-[1700px]:w-80">
            {i18n[language].growth.thirdStep.desc}
          </p>
        </div>
        <div
          className={`flex justify-center flex-col gap-3 opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.5s" }}
        >
          <h2 className="min-[1400px]:text-xl min-[1700px]:text-2xl font-semibold">
            {i18n[language].growth.fourthStep.title}
          </h2>
          <p className="text-secondary-font text-sm min-[1000px]:text-xs min-[1200px]:text-sm min-[1000px]:w-50 min-[1250px]:w-70 min-[1700px]:w-80">
            {i18n[language].growth.fourthStep.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GrowthScheme;
