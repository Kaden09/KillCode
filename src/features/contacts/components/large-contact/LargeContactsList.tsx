import { GmailIcon, TelegramIcon, XIcon } from "@/shared/assets";
import LargeContact, { type ILargeContact } from "./LargeContact";
import { useInView } from "react-intersection-observer";
import { useContext, useMemo } from "react";
import { I18nContext } from "@/shared/context/i18n-context";

function LargeContactsList() {
  const { language, i18n } = useContext(I18nContext);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const data: ILargeContact[] = useMemo(
    () => [
      {
        icon: <GmailIcon />,
        title: i18n[language].contacts.contactItems.firstItem.title,
        value: "studio@killcode.dev",
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=studio@killcode.dev&su=Тема письма&body=Текст письма",
      },
      {
        icon: <TelegramIcon />,
        title: i18n[language].contacts.contactItems.secondItem.title,
        value: "@killcodeteam",
        link: "https://t.me/killcodestudio",
      },
      {
        icon: <XIcon />,
        title: i18n[language].contacts.contactItems.tertiaryItem.title,
        value: "@killcodeteam",
        link: "https://x.com/killcodestudio",
      },
    ],
    [language, i18n],
  );

  return (
    <div ref={ref} className="flex flex-col lg:flex-row gap-3">
      {data.map((item, index) => (
        <LargeContact
          key={item.title}
          icon={item.icon}
          title={item.title}
          value={item.value}
          link={item.link}
          className={`opacity-0 ${inView && "animate-fade-in-bottom-1s"}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </div>
  );
}

export default LargeContactsList;
