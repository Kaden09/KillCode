import { ChevronLeft } from "lucide-react";
import { Link } from "react-router";

function BackButton() {
  return (
    <Link
      to="/"
      className="flex gap-3 bg-secondary-bg py-1.5 px-4 pr-5 rounded-xl border border-border hover:bg-secondary-bg-hover duration-150"
    >
      <ChevronLeft />
      <span>Назад</span>
    </Link>
  );
}

export default BackButton;
