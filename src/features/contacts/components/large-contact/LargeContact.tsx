import type { IContact } from "../../types/contact.type";

function LargeContact({
  Icon,
  title,
  value,
  link,
  ariaLabel,
  className = "",
  ...props
}: IContact) {
  return (
    <a
      href={link}
      aria-label={ariaLabel}
      target="_blank"
      className={`flex items-center w-full gap-3 bg-linear-to-r from-secondary-bg to-[#222222] py-2 sm:py-3 md:py-4 lg:py-5 px-2 sm:px-3 md:px-4 lg:px-5 border border-border rounded-xl md:rounded-2xl lg:rounded-3xl hover:border-contrast duration-300 ${className}`}
      {...props}
    >
      <span className="p-3 sm:p-4 bg-tertiary-bg rounded-lg">
        <Icon />
      </span>
      <div className="flex flex-col">
        <h3 className="text-sm md:text-lg min-[1300px]:text-xl font-semibold">
          {title}
        </h3>
        <p className="text-secondary-font text-sm sm:text-base">{value}</p>
      </div>
    </a>
  );
}

export default LargeContact;
