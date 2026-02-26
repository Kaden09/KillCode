import { I18nContext } from "@/shared/context/i18n-context";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";

function ContactsForm() {
  const { language, i18n } = useContext(I18nContext);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // Срабатывает только один раз
  });
  return (
    <form
      ref={ref}
      className="flex flex-col gap-3 bg-secondary-bg p-4 rounded-3xl border border-border w-full h-full opacity-0 animate-fade-in-bottom-1s"
    >
      <div className="flex gap-3">
        <input
          type="text"
          placeholder={i18n[language].contacts.formFields.name}
          className={`bg-tertiary-bg rounded-2xl py-4 px-5 outline-none w-full opacity-0 ${inView && "animate-fade-in-bottom-1s"}`}
          style={{ animationDelay: "0.1s" }}
        />
        <input
          type="email"
          placeholder={i18n[language].contacts.formFields.contact}
          className={`bg-tertiary-bg rounded-2xl py-4 px-5 outline-none w-full opacity-0 ${inView && "animate-fade-in-bottom-1s"}`}
          style={{ animationDelay: "0.2s" }}
        />
      </div>
      <textarea
        placeholder={i18n[language].contacts.formFields.message}
        className={`bg-tertiary-bg py-4 px-5 rounded-2xl w-full h-full outline-none resize-none opacity-0 ${inView && "animate-fade-in-bottom-1s"}`}
        style={{ animationDelay: "0.3s" }}
      ></textarea>
      <button
        type="submit"
        className={`bg-contrast-bg py-3 w-full text-tertiary-font font-medium text-lg rounded-2xl cursor-pointer hover:bg-contrast-bg-hover duration-300 opacity-0 ${inView && "animate-fade-in-bottom-1s"}`}
        style={{ animationDelay: "0.4s" }}
      >
        {i18n[language].contacts.formFields.send}
      </button>
    </form>
  );
}

export default ContactsForm;
