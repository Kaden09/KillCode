import { useData } from "./data";
import PortfolioItem from "./PortfolioItem";

function PortfolioItemsList() {
  const { data } = useData();

  return (
    <div className="flex flex-col gap-5">
      {data.map((item) => (
        <PortfolioItem
          img={item.img}
          title={item.title}
          desc={item.desc}
          cost={item.cost}
          technology={item.technology}
        />
      ))}
    </div>
  );
}

export default PortfolioItemsList;
