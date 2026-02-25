import { GmailIcon, TelegramIcon, XIcon } from "@/shared/assets";
import LargeContact from "./LargeContact";
import { useInView } from "react-intersection-observer";

const data = [
  {
    icon: <GmailIcon />,
    title: "Наш Email",
    value: "studio@killcode.dev",
    link: "#",
  },
  {
    icon: <TelegramIcon />,
    title: "Наш Telegram",
    value: "@killcodeteam",
    link: "#",
  },
  {
    icon: <XIcon />,
    title: "Наш Twitter",
    value: "@killcodeteam",
    link: "#",
  },
];

function LargeContactsList() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="flex gap-3">
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
