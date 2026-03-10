import { useInView } from "react-intersection-observer";
import TrustItem from "./TrustItem";
import useTrustItemsData from "../../hooks/useTrustItemsData";

function TrustItemsList() {
  const { data } = useTrustItemsData();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="hidden flex-col gap-4 min-[1024px]:flex">
      {data.map((item) => (
        <TrustItem
          key={item}
          title={item}
          className={`opacity-0 ${inView && "animate-fade-in-left"}`}
        />
      ))}
    </div>
  );
}

export default TrustItemsList;
