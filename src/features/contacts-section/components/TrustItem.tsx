import { Check } from "lucide-react";
import type { HTMLAttributes } from "react";

interface ITrustItem extends HTMLAttributes<HTMLDivElement> {
  title: string;
  className?: string;
}

function TrustItem({ title, className = "", ...props }: ITrustItem) {
  return (
    <div className={`flex items-center gap-4 ${className}`} {...props}>
      <span className="bg-secondary-bg border border-border rounded-full p-2 text-contrast opacity-0 animate-fade-in-left">
        <Check className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
      </span>
      <h3
        className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg opacity-0 animate-fade-in-left"
        style={{ animationDelay: "0.2s" }}
      >
        {title}
      </h3>
    </div>
  );
}

export default TrustItem;
