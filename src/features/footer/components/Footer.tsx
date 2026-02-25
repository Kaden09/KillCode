import { Logo } from "@/shared";
import FooterContactsList from "./FooterContactsList";
import { useInView } from "react-intersection-observer";

function Footer() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // Срабатывает только один раз
  });

  return (
    <footer ref={ref} className="flex items-center justify-between py-4 w-full">
      <Logo className={`opacity-0 ${inView && "animate-fade-in-top"}`} />
      <h3
        className={`opacity-0 ${inView && "animate-fade-in-top"}`}
        style={{ animationDelay: "0.1s" }}
      >
        Помогаем масштабировать ваш бизнес - быстро и безопасно
      </h3>
      <FooterContactsList />
    </footer>
  );
}

export default Footer;
