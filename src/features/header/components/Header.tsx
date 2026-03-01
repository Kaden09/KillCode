import { Logo } from "@/shared";
import LanguageSwitcher from "./language-switcher/LanguageSwitcher";
import Navbar from "./Navbar";
import { useLocation } from "react-router";
import BackButton from "./BackButton";

function Header() {
  const location = useLocation();

  return (
    <header className="flex justify-between items-center py-4 w-full">
      {location.pathname === "/portfolio" ? <BackButton /> : <Logo />}
      {location.pathname !== "/portfolio" && <Navbar />}
      <LanguageSwitcher />
    </header>
  );
}

export default Header;
