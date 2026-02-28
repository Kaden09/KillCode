import { Link } from "react-router";

interface ILogo {
  className?: string;
}

function Logo({ className = "" }: ILogo) {
  return (
    <Link
      to="/"
      className={`text-2xl md:text-3xl font-bold cursor-pointer select-none opacity-0 animate-fade-in-bottom-1s ${className}`}
    >
      <span className="text-contrast">Kill</span>Code
    </Link>
  );
}

export default Logo;
