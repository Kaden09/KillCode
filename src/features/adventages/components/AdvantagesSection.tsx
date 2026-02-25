import AdvantageItemsList from "./AdvantageItemsList";

function AdvantagesSection() {
  return (
    <div
      id="advantages"
      className="flex flex-col justify-center items-center gap-17 py-50"
    >
      <div className="flex flex-col gap-6">
        <h2 className="text-6xl text-center font-semibold">
          Наши <span className="text-contrast">преимущества</span>
        </h2>
        <p className="text-secondary-font text-center max-w-200 text-xl">
          С нами вы не будете думать о серверах, багах и технических
          ограничениях - мы берём все эти вопросы на себя.
        </p>
      </div>
      <AdvantageItemsList />
    </div>
  );
}

export default AdvantagesSection;
