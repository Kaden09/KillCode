import { ChevronLeft } from "lucide-react";
import { Link } from "react-router";

function BackButton() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 bg-secondary-bg py-1.5 px-4 pr-5 rounded-lg sm:rounded-xl border border-border hover:bg-secondary-bg-hover duration-150"
    >
      <ChevronLeft className="h-full w-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
      <span className="text-xs sm:text-sm md:text-base">Назад</span>
    </Link>
  );
}

export default BackButton;
