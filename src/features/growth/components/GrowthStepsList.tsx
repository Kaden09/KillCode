import { useInView } from "react-intersection-observer";
import useGrowthStepsData from "../hooks/useGrowthStepsData";
import GrowthStep from "./GrowthStep";

function GrowthStepsList() {
  const { data } = useGrowthStepsData();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="flex flex-col gap-10 lg:flex-row justify-around lg:items-start mt-5"
    >
      {data.map((item, index) => (
        <GrowthStep
          key={item.title}
          title={item.title}
          desc={item.desc}
          className={`opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </div>
  );
}

export default GrowthStepsList;
