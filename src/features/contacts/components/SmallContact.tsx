import type { HTMLAttributes } from "react";

interface ISmallContact extends HTMLAttributes<HTMLAnchorElement> {
  icon: React.ReactNode;
  link: string;
  className?: string;
}

function SmallContact({ icon, link, className = "", ...props }: ISmallContact) {
  return (
    <a
      href={link}
      target="_blank"
      {...props}
      className={`flex items-center justify-center bg-secondary-bg rounded-lg py-2 px-5 hover:bg-secondary-bg-hover cursor-pointer border border-border duration-100 ${className}`}
    >
      {icon}
    </a>
  );
}

export default SmallContact;
