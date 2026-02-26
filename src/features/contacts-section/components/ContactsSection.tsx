import LargeContactsList from "@/features/contacts/components/large-contact/LargeContactsList";
import ContactsForm from "./ContactsForm";
import TrustItem from "./TrustItem";
import { useInView } from "react-intersection-observer";

function ContactsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div id="contacts" className="flex flex-col gap-10 w-full py-50">
      <div className="flex items-center gap-15 min-h-115">
        <div ref={ref} className="flex flex-col gap-15 max-w-[50%]">
          <div className="flex flex-col gap-6">
            <h2
              className={`font-bold text-6xl opacity-0 ${inView && "animate-fade-in-top"}`}
            >
              Работа с <span className="text-contrast">нами</span>
            </h2>
            <p
              ref={ref}
              className={`text-secondary-font max-w-280 leading-7 text-xl opacity-0 ${inView && "animate-fade-in-top"}`}
              style={{ animationDelay: "0.1s" }}
            >
              Индивидуальный подход к каждому клиенту, мы стараемся, как можно
              больше погрузиться в тематику проекта и реализовать его с учетом
              всех тонкостей.
            </p>
          </div>
          <div ref={ref} className="flex flex-col gap-4">
            <TrustItem
              title="Оперативный ответ"
              className={`opacity-0 ${inView && "animate-fade-in-left"}`}
            />
            <TrustItem
              title="Бесплатная консультация"
              className={`opacity-0 ${inView && "animate-fade-in-left"}`}
              style={{ animationDelay: "0.2s" }}
            />
            <TrustItem
              title="Поддержка на всех этапах"
              className={`opacity-0 ${inView && "animate-fade-in-left"}`}
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
        <ContactsForm />
      </div>
      <LargeContactsList />
    </div>
  );
}

export default ContactsSection;
