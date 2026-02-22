import { Logo } from "@/shared";
import LanguageSwitcher from "./language-switcher/LanguageSwitcher";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex justify-between items-center py-4">
      <Logo />
      <Navbar />
      <LanguageSwitcher />
    </header>
  );
}

export default Header;
