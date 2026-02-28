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
    <div className="flex items-center justify-center w-full relative">
      <div
        ref={ref}
        className={`flex flex-col items-center relative w-full max-w-500 overflow-x-hidden min-h-32 opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
      >
        <ProductItemsList
          data={data2}
          className="animate-carousel-right-2 sm:animate-carousel-right"
        />
        <ProductItemsList
          data={data}
          className="top-13 sm:top-15 md:top-17 animate-carousel-left-2 sm:animate-carousel-left"
        />
        <div className="w-20 sm:w-30 md:w-40 h-full bg-linear-to-r from-[#141414] to-transparent z-99 absolute left-0"></div>
        <div className="w-20 sm:w-30 md:w-40 h-full bg-linear-to-l from-[#141414] to-transparent z-99 absolute right-0"></div>
      </div>
    </div>
  );
}

export default ProductSection;
