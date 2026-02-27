import { I18nContext } from "@/shared/context/i18n-context";
import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useInView } from "react-intersection-observer";
import { useContactSchema, type ContactFields } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";

const API_KEY = import.meta.env.VITE_API_KEY;

function ContactsForm() {
  const { language, i18n } = useContext(I18nContext);
  const { contactSchema } = useContactSchema();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFields>({
    resolver: yupResolver(contactSchema),
    mode: "onSubmit",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState<boolean>(false);

  const onSubmit = async (data: ContactFields) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://killcode.dev/api/contact",
        {
          name: data.name,
          telegram: data.contact,
          message: data.message,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": API_KEY,
          },
        },
      );
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
      return res.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Ошибка отправки");
      } else {
        setError("Произошла неизвестная ошибка");
      }
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      ref={ref}
      className="flex flex-col gap-3 bg-secondary-bg p-4 rounded-3xl border border-border w-full h-full opacity-0 animate-fade-in-bottom-1s"
    >
      <div className="flex gap-3">
        <div className="w-full flex flex-col gap-1">
          <input
            type="text"
            {...register("name")}
            required
            placeholder={i18n[language].contacts.formFields.name}
            className={`bg-tertiary-bg rounded-2xl py-4 px-5 outline-none w-full opacity-0 ${inView && "animate-fade-in-bottom-1s"}`}
            style={{ animationDelay: "0.1s" }}
          />
          <p className="text-contrast pl-2 animate-fade-in-right">
            {errors.name?.message}
          </p>
        </div>
        <div className="w-full flex flex-col gap-1">
          <input
            type="text"
            {...register("contact")}
            required
            placeholder={i18n[language].contacts.formFields.contact}
            className={`bg-tertiary-bg rounded-2xl py-4 px-5 outline-none w-full opacity-0 ${inView && "animate-fade-in-bottom-1s"}`}
            style={{ animationDelay: "0.2s" }}
          />
          <p className="text-contrast pl-2 animate-fade-in-right">
            {errors.contact?.message}
          </p>
        </div>
      </div>
      <div
        className={`w-full h-full flex flex-col gap-1 opacity-0 ${inView && "animate-fade-in-bottom-1s"}`}
        style={{ animationDelay: "0.3s" }}
      >
        <textarea
          {...register("message")}
          placeholder={i18n[language].contacts.formFields.message}
          required
          className={`bg-tertiary-bg py-4 px-5 rounded-2xl w-full h-full outline-none resize-none`}
        ></textarea>
        <p className="text-contrast pl-2 animate-fade-in-right">
          {errors.message?.message}
        </p>
      </div>
      {error && <p className="text-contrast">{error}</p>}
      <button
        type="submit"
        className={`bg-contrast-bg py-3 w-full text-tertiary-font font-medium text-lg rounded-2xl duration-300 opacity-0 ${loading || success ? "hover:bg-contrast-bg cursor-default" : "hover:bg-contrast-bg-hover cursor-pointer"} ${inView && "animate-fade-in-bottom-1s"}`}
        style={{ animationDelay: "0.4s" }}
        disabled={success || loading}
      >
        {loading
          ? i18n[language].contacts.formFields.loading
          : success
            ? i18n[language].contacts.formFields.sent
            : i18n[language].contacts.formFields.send}
      </button>
    </form>
  );
}

export default ContactsForm;
