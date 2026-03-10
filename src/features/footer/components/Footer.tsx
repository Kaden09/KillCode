import { Logo } from "@/shared";
import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import { I18nContext } from "@/shared/context/i18n-context";
import { SmallContactsList } from "@/features/contacts";

function Footer() {
  const { language, i18n } = useContext(I18nContext);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <footer
      ref={ref}
      className="flex flex-col gap-6 lg:flex-row items-center justify-between py-4 w-full"
    >
      <Logo className={`opacity-0 ${inView && "animate-fade-in-top"}`} />
      <h3
        className={`opacity-0 text-center text-sm md:text-base ${inView && "animate-fade-in-top"}`}
        style={{ animationDelay: "0.1s" }}
      >
        {i18n[language].footer.slogan}
      </h3>
      <SmallContactsList />
    </footer>
  );
}

export default Footer;
