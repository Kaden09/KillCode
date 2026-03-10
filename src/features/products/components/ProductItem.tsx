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
    <div className="flex items-center justify-center gap-3 sm:gap-5 rounded-full bg-secondary-bg border border-border py-2 sm:py-3 px-6 sm:px-8 w-full">
      <Icon className="text-contrast w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      <h2 className="whitespace-nowrap text-sm sm:text-base md:text-lg">
        {title}
      </h2>
    </div>
  );
}

export default ProductItem;
