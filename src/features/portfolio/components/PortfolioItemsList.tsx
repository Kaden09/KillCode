import { usePortfolioItemsData } from "../hooks/usePortfolioItemsData";
import PortfolioItem from "./PortfolioItem";

function PortfolioItemsList() {
  const { data } = usePortfolioItemsData();

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {data.map((item, index) => (
        <PortfolioItem
          img={item.img}
          title={item.title}
          desc={item.desc}
          cost={item.cost}
          stack={item.stack}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </main>
  );
}

export default PortfolioItemsList;
