import type { HTMLAttributes } from "react";

interface ITechnologyItem extends HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  className?: string;
}

function TechnologyItem({ icon, className, ...props }: ITechnologyItem) {
  return (
    <div
      className={`inline-flex animate-technology-glide items-center justify-center bg-secondary-bg rounded-full border border-border p-3 w-fit shadow-[inset_0_-6px_20px_0_rgba(160,160,160,0.25),inset_0_8px_20px_0px_rgba(0,0,0,0.5)] ${className}`}
      {...props}
    >
      <span className="w-10 h-10">{icon}</span>
    </div>
  );
}

export default TechnologyItem;
