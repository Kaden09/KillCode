import { ArrowUpRight } from "lucide-react";
import type { HTMLAttributes } from "react";
export interface IPortfolioItem extends HTMLAttributes<HTMLDivElement> {
  img: string;
  title: string;
  desc: string;
  cost: number;
  stack: string[];
}

function PortfolioItem({
  img,
  title,
  desc,
  cost,
  stack,
  ...props
}: IPortfolioItem) {
  return (
    <div
      className={`relative w-full h-full z-99 opacity-0 animate-fade-in-bottom-100 group`}
      {...props}
    >
      <div className="flex flex-col overflow-hidden min-[1700px]:flex-row p-2 min-[400px]:p-5 min-[400px]:min-h-200 min-h-180 min-[200px]:min-h-165 min-[1700px]:min-h-full h-full gap-5 min-[1700px]:gap-10 bg-secondary-bg rounded-3xl min-[400px]:rounded-[44px] border border-border min-[1700px]:pr-8 z-99 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[-3px_3px_0_0_#f32b24] duration-200">
        <div className="absolute top-0 left-0 w-full h-full group-hover:bg-[#00000025] duration-150" />
        <div
          className={`relative w-full min-h-[30%] min-[400px]:min-h-[50%] min-[1700px]:h-full min-[1700px]:w-[60%] rounded-2xl min-[400px]:rounded-3xl overflow-hidden bg-center bg-no-repeat bg-cover`}
          style={{ backgroundImage: `url(${img})` }}
        >
          <a
            href="https://t.me/killcode_portfolio"
            target="_blank"
            className="items-center justify-center group gap-3 absolute top-3 right-3 hidden bg-[#00000075] p-2 rounded-full cursor-pointer group-hover:flex hover:bg-[#00000090] duration-150 animate-fade-in-bottom"
          >
            <ArrowUpRight />
            <span>Подробнее</span>
          </a>
        </div>
        <div className="flex flex-col justify-between h-full min-[1700px]:w-[40%] gap-5 px-2 min-[400px]:px-5 pb-5 min-[1700px]:py-5 min-[1700px]:px-0">
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
                {stack.map((item, index) =>
                  index !== stack.length - 1 ? item + ", " : item,
                )}
              </span>
            </p>
          </div>
        </div>
        <a
          href="https://t.me/killcode_portfolio"
          className="bg-contrast-bg text-black text-center p-2 rounded-full font-medium z-99 min-[1024px]:hidden"
        >
          Подробнее
        </a>
      </div>
    </div>
  );
}

export default PortfolioItem;
