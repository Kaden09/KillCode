import { useInView } from "react-intersection-observer";
import { useData } from "./data";
import ProductItemsList from "./ProductItemsList";

function ProductSection() {
  const { data, data2 } = useData();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="flex max-w-full items-center justify-center relative">
      <div
        ref={ref}
        className={`flex flex-col gap-5 items-center relative w-[90vw] overflow-x-hidden opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
      >
        <ProductItemsList
          data={data2}
          className="will-change-transform animate-carousel-right"
        />
        <ProductItemsList
          data={data}
          className="will-change-transform animate-carousel-left"
        />
        <div className="w-20 sm:w-30 md:w-40 h-full bg-linear-to-r from-[#141414] to-transparent z-99 absolute left-0"></div>
        <div className="w-20 sm:w-30 md:w-40 h-full bg-linear-to-l from-[#141414] to-transparent z-99 absolute right-0"></div>
      </div>
    </div>
  );
}

export default ProductSection;
