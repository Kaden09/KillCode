import type { IProductItem } from "./ProductItem";
import ProductItem from "./ProductItem";

interface IProductItemsList {
  data: IProductItem[];
  className?: string;
}

function ProductItemsList({ data, className = "" }: IProductItemsList) {
  return (
    <div className={`absolute flex gap-5 ${className}`}>
      {data.map((item, index) => (
        <ProductItem key={index} Icon={item.Icon} title={item.title} />
      ))}
    </div>
  );
}

export default ProductItemsList;
