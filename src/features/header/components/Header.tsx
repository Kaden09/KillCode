import LanguageSwitcher from "./language-switcher/LanguageSwitcher";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex justify-between items-center py-4">
      <h2 className="text-3xl font-bold cursor-pointer select-none">
        <span className="text-contrast">Kill</span>Code
      </h2>
      <Navbar />
      <LanguageSwitcher />
    </header>
  );
}

export default Header;
