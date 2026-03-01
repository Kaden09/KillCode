import { Footer } from "@/features/footer";
import { Header } from "@/features/header";
import PortfolioItemsList from "@/features/portfolio/components/PortfolioItemsList";

function Portfolio() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 items-center h-svh w-full px-2 sm:px-5 md:px-10 lg:px-19.5">
      <Header />
      <div className="w-full flex flex-col min-[250px]:items-center sm:items-start gap-2 ml-4">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
          Наше портфолио
        </h1>
        <p className="text-secondary-font min-[250px]:text-center text-xs sm:text-sm sm:text-start md:text-base">
          Здесь мы выкладываем часть наших проектов
        </p>
      </div>
      <PortfolioItemsList />
      <Footer />
    </div>
  );
}

export default Portfolio;
