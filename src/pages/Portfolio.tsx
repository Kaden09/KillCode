import { Header } from "@/features/header";
import PortfolioItemsList from "@/features/portfolio/components/PortfolioItemsList";

function Portfolio() {
  return (
    <div className="flex flex-col gap-10 items-center h-svh w-full px-2 sm:px-5 md:px-10 lg:px-19.5">
      <Header />
      <PortfolioItemsList />
    </div>
  );
}

export default Portfolio;
