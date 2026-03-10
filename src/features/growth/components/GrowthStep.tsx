import type { IGrowthStep } from "../types/Growth.type";

function GrowthStep({ title, desc, className = "", ...props }: IGrowthStep) {
  return (
    <div
      className={`flex items-start lg:flex-col gap-5 ${className}`}
      {...props}
    >
      <div
        className={`h-0.75 min-w-10 max-w-20 w-full lg:h-20 lg:w-0.75 lg:min-w-0.75 mt-3 lg:mt-0 rounded-full bg-linear-to-r lg:bg-linear-to-b from-contrast to-[#141414]`}
      />
      <div className={`flex justify-center flex-col gap-3`}>
        <h2 className="min-[1400px]:text-xl min-[1700px]:text-2xl font-semibold">
          {title}
        </h2>
        <p className="text-secondary-font text-sm min-[1000px]:text-xs min-[1200px]:text-sm min-[1000px]:w-50 min-[1250px]:w-70 min-[1700px]:w-80">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default GrowthStep;
