import { Logo } from "@/shared";
import LanguageSwitcher from "./language-switcher/LanguageSwitcher";
import Navbar from "./Navbar";
import { useLocation } from "react-router";

function Header() {
  const location = useLocation();

  return (
    <header className="flex justify-between items-center py-4 w-full">
      <Logo />
      {location.pathname !== "/portfolio" && <Navbar />}
      <LanguageSwitcher />
    </header>
  );
}

export default Header;
