interface ILogo {
  className?: string;
}

function Logo({ className = "" }: ILogo) {
  return (
    <h2
      className={`text-3xl font-bold cursor-pointer select-none opacity-0 animate-fade-in-bottom-1s ${className}`}
    >
      <span className="text-contrast">Kill</span>Code
    </h2>
  );
}

export default Logo;
