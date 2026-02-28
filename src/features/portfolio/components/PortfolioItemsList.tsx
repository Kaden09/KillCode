import { useData } from "./data";
import PortfolioItem from "./PortfolioItem";

function PortfolioItemsList() {
  const { data } = useData();

  return (
    <div className="grid grid-cols-2 gap-5">
      {data.reverse().map((item, index) => (
        <PortfolioItem
          img={item.img}
          title={item.title}
          desc={item.desc}
          cost={item.cost}
          technology={item.technology}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </div>
  );
}

export default PortfolioItemsList;
