import { I18nContext } from "@/shared/context/i18n-context";
import { useContext } from "react";
import * as yup from "yup";

export interface ContactFields {
  name: string;
  contact: string;
  message: string;
}

export function useContactSchema() {
  const { language, i18n } = useContext(I18nContext);

  const contactSchema = yup.object({
    name: yup
      .string()
      .required(i18n[language].contacts.errorMessages.name.error)
      .trim(),
    contact: yup
      .string()
      .trim()
      .required(i18n[language].contacts.errorMessages.contact.firstError)
      .min(2, i18n[language].contacts.errorMessages.contact.secondError),
    message: yup
      .string()
      .trim()
      .required(i18n[language].contacts.errorMessages.message.firstError)
      .min(5, i18n[language].contacts.errorMessages.message.secondError),
  });

  return { contactSchema };
}
