import { data } from "./data";
import ProductItemsList from "./ProductItemsList";

function ProductSection() {
  return (
    <div className="flex flex-col relative w-full max-w-full">
      <ProductItemsList data={data} className="animate-carousel-left" />
      <ProductItemsList data={data} className="top-17 animate-carousel-right" />
    </div>
  );
}

export default ProductSection;
