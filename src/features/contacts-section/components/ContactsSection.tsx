import ContactsForm from "./ContactsForm";
import TrustItem from "./TrustItem";

function ContactsSection() {
  return (
    <div className="flex items-center justify-center gap-5 w-full min-h-118">
      <div className="flex flex-col gap-5 max-w-[50%]">
        <h2 className="font-bold text-6xl">
          Работа с <span className="text-contrast">нами</span>
        </h2>
        <p className="text-secondary-font">
          Индивидуальный подход к каждому клиенту, мы стараемся, как можно
          больше погрузиться в тематику проекта и реализовать его с учетом всех
          тонкостей.
        </p>
        <div className="flex flex-col gap-4">
          <TrustItem title="Оперативный ответ" />
          <TrustItem title="Бесплатная консультация" />
          <TrustItem title="Поддержка на всех этапах" />
        </div>
      </div>
      <ContactsForm />
    </div>
  );
}

export default ContactsSection;
