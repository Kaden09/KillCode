import { Footer } from "@/features/footer";
import { Header } from "@/features/header";
import PortfolioItemsList from "@/features/portfolio/components/PortfolioItemsList";

function Portfolio() {
  return (
    <div className="flex flex-col gap-10 items-center h-svh w-full px-2 sm:px-5 md:px-10 lg:px-19.5">
      <Header />
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Наше портфолио</h1>
        <p className="text-secondary-font">
          Здесь мы выкладываем часть наших проектов
        </p>
      </div>
      <PortfolioItemsList />
      <Footer />
    </div>
  );
}

export default Portfolio;
