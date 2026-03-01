import type { IProductItem } from "./ProductItem";
import ProductItem from "./ProductItem";

interface IProductItemsList {
  data: IProductItem[];
  className?: string;
}

function ProductItemsList({ data, className = "" }: IProductItemsList) {
  return (
    <div className={`flex mx-auto overflow-hidden`}>
      <div className={`flex gap-5 pr-5 ${className}`}>
        {data.map((item, index) => (
          <ProductItem key={index} Icon={item.Icon} title={item.title} />
        ))}
      </div>
      <div aria-hidden className={`flex gap-5 pr-5 ${className}`}>
        {data.map((item, index) => (
          <ProductItem key={index} Icon={item.Icon} title={item.title} />
        ))}
      </div>
    </div>
  );
}

export default ProductItemsList;
