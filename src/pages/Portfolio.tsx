import { Header } from "@/features/header";
import PortfolioItemsList from "@/features/portfolio/components/PortfolioItemsList";

function Portfolio() {
  return (
    <div className="flex flex-col gap-10 items-center h-svh w-full">
      <Header />
      <PortfolioItemsList />
    </div>
  );
}

export default Portfolio;
