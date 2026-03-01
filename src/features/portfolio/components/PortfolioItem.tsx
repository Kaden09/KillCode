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
      <div className="w-full h-full absolute top-0 left-0 bg-contrast rounded-[26px] min-[400px]:rounded-[46px] -z-10"></div>
      <div className="flex flex-col min-[1800px]:flex-row p-2 min-[400px]:p-5 min-[400px]:min-h-160 min-h-180 min-[200px]:min-h-145 min-[1800px]:min-h-full h-full gap-5 min-[1800px]:gap-10 bg-secondary-bg rounded-3xl min-[400px]:rounded-[44px] border border-border min-[1800px]:pr-8 z-99 hover:translate-x-1 hover:-translate-y-1 duration-200">
        <div
          className={`w-full min-h-[30%] min-[400px]:min-h-[50%] min-[1800px]:h-full min-[1800px]:w-[60%] rounded-2xl min-[400px]:rounded-3xl overflow-hidden bg-center bg-no-repeat bg-cover`}
          style={{ backgroundImage: `url(${img})` }}
        />
        <div className="flex flex-col justify-between h-full min-[1800px]:w-[40%] gap-5 px-2 min-[400px]:px-5 pb-5 min-[1800px]:py-5 min-[1800px]:px-0">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl min-[400px]:text-2xl font-semibold">
              {title}
            </h2>
            <p className="text-secondary-font text-xs">{desc}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-secondary-font text-sm">
              Стоимость: <span className="text-white">{cost}$</span>
            </p>
            <p className="text-secondary-font text-sm">
              Технологии:{" "}
              <span className="text-white">
                {technology.map((item, index) =>
                  index !== technology.length - 1 ? item + ", " : item,
                )}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
