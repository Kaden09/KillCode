import { useInView } from "react-intersection-observer";
import SmallContact from "./SmallContact";
import useSmallContactData from "../../hooks/useSmallContactData";

function SmallContactsList() {
  const { data } = useSmallContactData();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="flex gap-3">
      {data.map((item, index) => (
        <SmallContact
          key={item.link}
          Icon={item.Icon}
          link={item.link}
          ariaLabel={item.ariaLabel}
          className={`opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
        />
      ))}
    </div>
  );
}

export default SmallContactsList;
