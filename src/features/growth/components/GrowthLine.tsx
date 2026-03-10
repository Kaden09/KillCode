import { useInView } from "react-intersection-observer";

function GrowthLine() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div>
      <div
        ref={ref}
        className={`relative opacity-0 ${inView && "animate-fade-in-growth-line-2 lg:animate-fade-in-growth-line"}`}
      >
        <div className="absolute top-0 left-0 h-full lg:h-2.5 w-2.5 lg:w-full bg-linear-to-b lg:bg-linear-to-r from-[#141414] via-contrast/40 to-contrast rounded-full blur-[20px]" />
        <div className="absolute left-0.5 top-0 lg:top-0.5 lg:left-0 h-[99.5%] lg:h-1.5 w-1.5 lg:w-[99.5%] bg-linear-to-b lg:bg-linear-to-r from-[#141414] via-contrast/40 to-contrast rounded-full blur-md" />
        <div className="absolute left-0.75 top-0 lg:top-0.75 lg:left-0 h-[99%] lg:h-1 w-1 lg:w-[99%] bg-linear-to-b lg:bg-linear-to-r from-[#141414] via-contrast/40 to-contrast rounded-full blur-[6px]" />
        <div className="absolute left-0.75 top-0 lg:top-0.75 lg:left-0 h-[98.5%] lg:h-1 w-1 lg:w-[98.5%] bg-linear-to-b lg:bg-linear-to-r from-[#141414] via-contrast/40 to-contrast rounded-full blur-[3px]" />
        <div className="absolute left-0.75 top-0 lg:top-0.75 lg:left-0 h-[98.25%] lg:h-1 w-1 lg:w-[98.25%] bg-linear-to-b lg:bg-linear-to-r from-[#141414]  to-contrast rounded-full blur-[0.75px]" />
      </div>
    </div>
  );
}

export default GrowthLine;
