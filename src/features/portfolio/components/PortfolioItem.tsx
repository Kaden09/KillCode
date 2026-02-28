import type { HTMLAttributes } from "react";
export interface IPortfolioItem extends HTMLAttributes<HTMLDivElement> {
  img: string;
  title: string;
  desc: string;
  cost: number;
  technology: string[];
}

function PortfolioItem({
  img,
  title,
  desc,
  cost,
  technology,
  ...props
}: IPortfolioItem) {
  return (
    <div
      className={`relative w-full h-full z-99 opacity-0 animate-fade-in-bottom-100`}
      {...props}
    >
      <div className="w-full h-full absolute top-0 left-0 bg-contrast rounded-[46px] -z-10"></div>
      <div className="flex h-full gap-3 bg-secondary-bg rounded-[44px] border border-border pr-8 z-99 hover:translate-x-1 hover:-translate-y-1 duration-200">
        <img
          src={img}
          alt="image"
          className="min-w-130 h-auto rounded-[44px] p-5 object-cover"
        />
        <div className="flex flex-col justify-between gap-5 py-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-secondary-font text-xs">{desc}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-secondary-font text-sm">
              Стоимость: <span className="text-white">{cost}$</span>
            </p>
            <p className="text-secondary-font text-sm">
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
