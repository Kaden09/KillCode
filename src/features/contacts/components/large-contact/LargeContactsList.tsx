import useLargeContactData from "../../hooks/useLargeContactData";
import LargeContact from "./LargeContact";
import { useInView } from "react-intersection-observer";

function LargeContactsList() {
  const { data } = useLargeContactData();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="flex flex-col lg:flex-row gap-3">
      {data.map((item, index) => (
        <LargeContact
          key={item.title}
          Icon={item.Icon}
          title={item.title}
          value={item.value}
          link={item.link}
          ariaLabel={item.ariaLabel}
          className={`opacity-0 ${inView && "animate-fade-in-bottom-1s"}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </div>
  );
}

export default LargeContactsList;
