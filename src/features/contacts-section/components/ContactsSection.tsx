import LargeContactsList from "@/features/contacts/components/large-contact/LargeContactsList";
import ContactsForm from "./ContactsForm";
import TrustItem from "./TrustItem";

function ContactsSection() {
  return (
    <div className="flex flex-col gap-10 w-full py-50">
      <div className="flex items-center gap-15 min-h-115">
        <div className="flex flex-col gap-15 max-w-[50%]">
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-6xl">
              Работа с <span className="text-contrast">нами</span>
            </h2>
            <p className="text-secondary-font max-w-280 leading-7 text-lg">
              Индивидуальный подход к каждому клиенту, мы стараемся, как можно
              больше погрузиться в тематику проекта и реализовать его с учетом
              всех тонкостей.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <TrustItem title="Оперативный ответ" />
            <TrustItem title="Бесплатная консультация" />
            <TrustItem title="Поддержка на всех этапах" />
          </div>
        </div>
        <ContactsForm />
      </div>
      <LargeContactsList />
    </div>
  );
}

export default ContactsSection;
