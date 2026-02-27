export interface IPortfolioItem {
  img: string;
  title: string;
  desc: string;
  cost: number;
  technology: string[];
}

function PortfolioItem({ img, title, desc, cost, technology }: IPortfolioItem) {
  return (
    <div className="relative w-full h-full z-99">
      <div className="w-full h-full absolute top-0 left-0 bg-contrast rounded-[46px] -z-10"></div>
      <div className="flex gap-10 bg-secondary-bg rounded-[44px] border border-border pr-30 z-99 hover:translate-x-1 hover:-translate-y-1 duration-200">
        <img
          src={img}
          alt="image"
          className="min-w-100 min-h-90 rounded-[44px] p-1 object-cover aspect-square"
        />
        <div className="flex flex-col justify-between gap-10 py-10">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-semibold">{title}</h2>
            <p className="text-secondary-font text-lg">{desc}</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-secondary-font text-lg">
              Стоимость: <span className="text-white">{cost}$</span>
            </p>
            <p className="text-secondary-font text-lg">
              Технологии:{" "}
              <span className="text-white">
                {technology.map((item) => item + ", ")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
