import { I18nContext } from "@/shared/context/i18n-context";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";

function MiniGrowthScheme() {
  const { language, i18n } = useContext(I18nContext);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="flex items-center justify-center gap-5 h-full min-[1000px]:hidden">
      <div className="flex min-[250px]:w-[90%] min-[500px]:w-[70%] gap-5">
        <div ref={ref} className={`relative`}>
          <div
            className={`absolute top-0 left-0 w-2.5 h-full bg-linear-to-b from-[#141414] to-contrast rounded-full blur-[20px] opacity-0 ${inView && "animate-fade-in-growth-line-2"}`}
          />
          <div
            className={`absolute top-0.5 left-0 w-1.5 h-[99.5%] bg-linear-to-b from-[#141414] to-contrast rounded-full blur-md opacity-0 ${inView && "animate-fade-in-growth-line-3"}`}
          />
          <div
            className={`absolute top-0.75 left-0 w-1 h-[99%] bg-linear-to-b from-[#141414] to-contrast rounded-full blur-[6px] opacity-0 ${inView && "animate-fade-in-growth-line-4"}`}
          />
          <div
            className={`absolute top-0.75 left-0 w-1 h-[98.5%] bg-linear-to-b from-[#141414] to-contrast rounded-full blur-[3px] opacity-0 ${inView && "animate-fade-in-growth-line-4"}`}
          />
        </div>
        <div
          ref={ref}
          className="flex flex-col justify-between min-[250px]:mt-11 min-[305px]:mt-13 min-[330px]:mt-15 min-[350px]:mt-7 min-[450px]:mt-10 min-[500px]:mt-8 min-[850px]:mt-12 min-[250px]:ml-5 min-[400px]:ml-10 min-[250px]:mb-49 min-[350px]:mb-36 min-[1000px]:mr-55 min-[1200px]:mr-60 min-[1300px]:mr-73 min-[1500px]:mr-77 min-[1700px]:mr-88"
        >
          <div
            className={`h-0.75 min-[250px]:w-10 min-[400px]:w-20 rounded-full bg-linear-to-r from-contrast to-[#141414] opacity-0 ${inView && "animate-fade-in-top"}`}
          />
          <div
            className={`h-0.75 min-[250px]:w-10 min-[400px]:w-20 rounded-full bg-linear-to-r from-contrast to-[#141414] opacity-0 ${inView && "animate-fade-in-top"}`}
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className={`h-0.75 min-[250px]:w-10 min-[400px]:w-20 rounded-full bg-linear-to-r from-contrast to-[#141414] opacity-0 ${inView && "animate-fade-in-top"}`}
            style={{ animationDelay: "0.3s" }}
          />
          <div
            className={`h-0.75 min-[250px]:w-10 min-[400px]:w-20 rounded-full mt-4 min-[350px]:mt-1 min-[400px]:mt-7 min-[410px]:mt-4 min-[480px]:mt-0 min-[500px]:mt-8 min-[550px]:mt-4 bg-linear-to-r from-contrast to-[#141414] opacity-0 ${inView && "animate-fade-in-top"}`}
            style={{ animationDelay: "0.4s" }}
          />
        </div>
        <div
          ref={ref}
          className="flex flex-col min-[250px]:min-h-250 min-[350px]:min-h-180 justify-around items-start"
        >
          <div
            className={`flex justify-center flex-col gap-3 opacity-0 ${inView && "animate-fade-in-top"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="min-[250px]:text-sm min-[600px]:text-lg font-semibold">
              {i18n[language].growth.firstStep.title}
            </h2>
            <p className="text-secondary-font min-[250px]:text-xs min-[600px]:text-sm">
              {i18n[language].growth.firstStep.desc}
            </p>
          </div>
          <div
            className={`flex justify-center flex-col gap-3 opacity-0 ${inView && "animate-fade-in-top"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="min-[250px]:text-sm min-[600px]:text-lg font-semibold">
              {i18n[language].growth.secondStep.title}
            </h2>
            <p className="text-secondary-font min-[250px]:text-xs min-[600px]:text-sm">
              {i18n[language].growth.secondStep.desc}
            </p>
          </div>
          <div
            className={`flex justify-center flex-col gap-3 opacity-0 ${inView && "animate-fade-in-top"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <h2 className="min-[250px]:text-sm min-[600px]:text-lg font-semibold">
              {i18n[language].growth.thirdStep.title}
            </h2>
            <p className="text-secondary-font min-[250px]:text-xs min-[600px]:text-sm">
              {i18n[language].growth.thirdStep.desc}
            </p>
          </div>
          <div
            className={`flex justify-center flex-col gap-3 opacity-0 ${inView && "animate-fade-in-top"}`}
            style={{ animationDelay: "0.5s" }}
          >
            <h2 className="min-[250px]:text-sm min-[600px]:text-lg font-semibold">
              {i18n[language].growth.fourthStep.title}
            </h2>
            <p className="text-secondary-font min-[250px]:text-xs min-[600px]:text-sm">
              {i18n[language].growth.fourthStep.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniGrowthScheme;
