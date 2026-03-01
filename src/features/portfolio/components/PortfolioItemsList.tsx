import { useData } from "./data";
import PortfolioItem from "./PortfolioItem";

function PortfolioItemsList() {
  const { data } = useData();

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {data.map((item, index) => (
        <PortfolioItem
          img={item.img}
          title={item.title}
          desc={item.desc}
          cost={item.cost}
          technology={item.technology}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </main>
  );
}

export default PortfolioItemsList;
