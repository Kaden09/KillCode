import { data } from "./data";
import ProductItemsList from "./ProductItemsList";

function ProductSection() {
  return (
    <div className="flex flex-col gap-5 relative w-full max-w-full">
      <ProductItemsList data={data} className="animate-carousel-left" />
      <ProductItemsList data={data} className="top-20 animate-carousel-right" />
    </div>
  );
}

export default ProductSection;
