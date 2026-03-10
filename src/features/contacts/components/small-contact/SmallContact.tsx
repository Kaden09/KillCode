import type { IContact } from "../../types/contact.type";

function SmallContact({
  Icon,
  link,
  ariaLabel,
  className = "",
  ...props
}: Omit<IContact, "title" | "value">) {
  return (
    <a
      href={link}
      aria-label={ariaLabel}
      target="_blank"
      {...props}
      className={`flex items-center justify-center bg-secondary-bg rounded-lg py-2 px-5 hover:bg-secondary-bg-hover cursor-pointer border border-border duration-100 ${className}`}
    >
      <Icon />
    </a>
  );
}

export default SmallContact;
