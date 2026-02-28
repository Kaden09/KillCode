import type { HTMLAttributes } from "react";
export interface ILargeContact extends HTMLAttributes<HTMLAnchorElement> {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
  className?: string;
}

function LargeContact({
  icon,
  title,
  value,
  link,
  className = "",
  ...props
}: ILargeContact) {
  return (
    <a
      href={link}
      target="_blank"
      className={`flex items-center w-full gap-3 bg-linear-to-r from-secondary-bg to-[#222222] py-2 sm:py-3 md:py-5 px-2 sm:px-3 md:px-5 border border-border rounded-xl sm:rounded-2xl md:rounded-3xl hover:border-contrast duration-300 ${className}`}
      {...props}
    >
      <span className="p-3 sm:p-4 bg-tertiary-bg rounded-lg">{icon}</span>
      <div className="flex flex-col">
        <h3 className="text-sm md:text-lg lg:text-xl font-semibold">{title}</h3>
        <p className="text-secondary-font text-sm sm:text-base">{value}</p>
      </div>
    </a>
  );
}

export default LargeContact;
