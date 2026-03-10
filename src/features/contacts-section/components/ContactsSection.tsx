import LargeContactsList from "@/features/contacts/components/large-contact/LargeContactsList";
import ContactsForm from "./ContactsForm";
import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import { I18nContext } from "@/shared/context/i18n-context";
import TrustItemsList from "./trust-item/TrustItemsList";

function ContactsSection() {
  const { language, i18n } = useContext(I18nContext);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      id="contacts"
      className="flex flex-col gap-2.5 sm:gap-8 md:gap-10 w-full py-30 sm:py-40 md:py-50 md:pt-10"
    >
      <div className="flex flex-col lg:flex-row items-start gap-7 md:gap-10 lg:gap-15 min-h-115">
        <div
          ref={ref}
          className="flex flex-col items-center md:items-start gap-5 sm:gap-6 md:gap-10 lg:gap-13 w-full lg:max-w-[40%]"
        >
          <div className="flex justify-center items-center lg:items-start lg:justify-start w-full flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <h2
              className={`font-bold text-center lg:text-start text-3xl min-[425px]:text-4xl min-[768px]:text-5xl min-[1024px]:text-4xl min-[1250px]:text-6xl opacity-0 ${inView && "animate-fade-in-top"}`}
            >
              {i18n[language].contacts.title.firstPart}{" "}
              <span className="text-contrast">
                {i18n[language].contacts.title.secondPart}
              </span>
            </h2>
            <p
              ref={ref}
              className={`text-secondary-font max-w-180 leading-4 sm:leading-6 md:leading-7 text-center lg:text-start text-xs sm:text-base md:text-lg opacity-0 ${inView && "animate-fade-in-top"}`}
              style={{ animationDelay: "0.1s" }}
            >
              {i18n[language].contacts.description}
            </p>
          </div>
          <TrustItemsList />
        </div>
        <ContactsForm />
      </div>
      <LargeContactsList />
    </div>
  );
}

export default ContactsSection;
