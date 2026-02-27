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
      className={`flex items-center w-full gap-3 bg-linear-to-r from-secondary-bg to-[#222222] py-5 px-5 border border-border rounded-3xl hover:border-contrast duration-300 ${className}`}
      {...props}
    >
      <span className="p-4 bg-tertiary-bg rounded-lg">{icon}</span>
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-secondary-font">{value}</p>
      </div>
    </a>
  );
}

export default LargeContact;
