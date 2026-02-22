import { Logo } from "@/shared";
import FooterContactsList from "./FooterContactsList";

function Footer() {
  return (
    <footer className="flex items-center justify-between py-4">
      <Logo />
      <h3>Помогаем масштабировать ваш бизнес - быстро и безопасно</h3>
      <FooterContactsList />
    </footer>
  );
}

export default Footer;
