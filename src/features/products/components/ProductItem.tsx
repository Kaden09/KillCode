import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

export interface IProductItem {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
}

function ProductItem({ Icon, title }: IProductItem) {
  return (
    <div className="flex items-center justify-center gap-5 rounded-full bg-secondary-bg border border-border py-3 px-8 w-full">
      <Icon className="text-contrast" />
      <h2 className="whitespace-nowrap text-lg">{title}</h2>
    </div>
  );
}

export default ProductItem;
