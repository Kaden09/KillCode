import { SmallContact } from "@/features/contacts";
import { GmailIcon, TelegramIcon, XIcon } from "@/shared/assets";
import { useInView } from "react-intersection-observer";

const data = [
  {
    icon: <TelegramIcon />,
    link: "https://t.me/killcodestudio",
  },
  {
    icon: <GmailIcon />,
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=studio@killcode.dev&su=Тема письма&body=Текст письма",
  },
  {
    icon: <XIcon />,
    link: "https://x.com/killcodestudio",
  },
];

function FooterContactsList() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // Срабатывает только один раз
  });

  return (
    <div ref={ref} className="flex gap-4">
      {data.map((item, index) => (
        <SmallContact
          key={item.link}
          icon={item.icon}
          link={item.link}
          className={`opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
        />
      ))}
    </div>
  );
}

export default FooterContactsList;
