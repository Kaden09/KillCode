import { data } from "./data";
import ProductItemsList from "./ProductItemsList";

function ProductSection() {
  return (
    <div className="flex flex-col relative right-33 w-400 min-h-32 overflow-hidden">
      <ProductItemsList data={data} className="animate-carousel-left" />
      <ProductItemsList data={data} className="top-17 animate-carousel-right" />
      <div className="w-40 h-full bg-linear-to-r from-[#141414] to-transparent z-99"></div>
      <div className="w-40 h-full bg-linear-to-l from-[#141414] to-transparent z-99 absolute right-0"></div>
    </div>
  );
}

export default ProductSection;
