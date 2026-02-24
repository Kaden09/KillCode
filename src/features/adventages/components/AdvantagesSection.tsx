import AdvantageItemsList from "./AdvantageItemsList";

function AdvantagesSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col gap-3">
        <h2 className="text-6xl text-center font-semibold">
          Наши <span className="text-contrast">преимущества</span>
        </h2>
        <p className="text-secondary-font text-center max-w-150">
          С нами вы не будете думать о серверах, багах и технических
          ограничениях - мы берём все эти вопросы на себя.
        </p>
      </div>
      <AdvantageItemsList />
    </div>
  );
}

export default AdvantagesSection;
