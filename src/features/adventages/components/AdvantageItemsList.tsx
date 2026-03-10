import useAdvantagesData from "../hooks/useAdvantagesData";
import AdvantageItem from "./AdvantageItem";

function AdvantageItemsList() {
  const { data } = useAdvantagesData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-[640px]:gap-6 min-[1300px]:gap-10 relative">
      {data.map((item, index) => (
        <AdvantageItem
          key={item.title}
          Icon={item.Icon}
          title={item.title}
          desc={item.desc}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </div>
  );
}

export default AdvantageItemsList;
