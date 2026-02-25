import { useInView } from "react-intersection-observer";
import { data } from "./data";
import ProductItemsList from "./ProductItemsList";

function ProductSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // Срабатывает только один раз
  });
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center relative w-full max-w-500 min-h-32 overflow-hidden opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
    >
      <ProductItemsList data={data} className="animate-carousel-left" />
      <ProductItemsList data={data} className="top-17 animate-carousel-right" />
      <div className="w-40 h-full bg-linear-to-r from-[#141414] to-transparent z-99 absolute left-0"></div>
      <div className="w-40 h-full bg-linear-to-l from-[#141414] to-transparent z-99 absolute right-0"></div>
    </div>
  );
}

export default ProductSection;
