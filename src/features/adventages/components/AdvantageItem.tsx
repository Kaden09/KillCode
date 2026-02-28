import type { HTMLAttributes } from "react";
import { useInView } from "react-intersection-observer";

export interface IAdvantageItem extends HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function AdvantageItem({ icon, title, description, ...props }: IAdvantageItem) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // Срабатывает только один раз
  });

  return (
    <div
      ref={ref}
      className={`relative w-full max-w-170 h-full opacity-0 z-99 ${inView && "animate-fade-in-bottom-100"}`}
      {...props}
    >
      <div className="flex flex-col bg-secondary-bg h-full rounded-4xl border border-border p-5 sm:p-7 md:p-8 pt-6 relative z-99 hover:translate-x-1 hover:-translate-y-1 duration-200">
        <hr className="w-13.75 text-contrast absolute left-8 sm:left-8 -top-px border-t-2" />
        <div
          className="absolute top-0 left-4.75 bg-linear-to-b from-contrast/20 to-transparent w-20.5 h-15"
          style={{
            clipPath: "polygon(16% 0%, 84% 0%, 100% 100%, 0% 100%)",
          }}
        ></div>
        <span className="text-contrast mb-9 sm:mb-11 md:mb-13 ml-4.75 sm:ml-2.75 md:ml-1.75">
          {icon}
        </span>
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          <h3 className="min-[280px]:text-2xl min-[1000px]:text-xl min-[1100px]:text-2xl min-[1300px]:text-3xl font-semibold select-none">
            {title}
          </h3>
          <p className="text-secondary-font text-sm sm:text-base select-none">
            {description}
          </p>
        </div>
      </div>
      <div className="w-full h-full absolute top-0 bg-contrast rounded-[34px]"></div>
    </div>
  );
}

export default AdvantageItem;
