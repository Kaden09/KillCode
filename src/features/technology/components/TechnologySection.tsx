import TechnologyCarousel from "./TechnologyCarousel";

function TechnologySection() {
  return (
    <div className="flex flex-col items-center gap-17 w-full py-50">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-6xl text-center font-semibold">
          Наши <span className="text-contrast">технологии</span>
        </h2>
        <p className="text-secondary-font text-center max-w-200 text-xl">
          Подберем наиболее подходящие инструменты для ваших задач
        </p>
      </div>
      <TechnologyCarousel />
    </div>
  );
}

export default TechnologySection;
