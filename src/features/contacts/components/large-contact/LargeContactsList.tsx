import { GmailIcon, TelegramIcon, XIcon } from "@/shared/assets";
import LargeContact from "./LargeContact";

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
  return (
    <div className="flex gap-3">
      {data.map((item) => (
        <LargeContact
          key={item.title}
          icon={item.icon}
          title={item.title}
          value={item.value}
          link={item.link}
        />
      ))}
    </div>
  );
}

export default LargeContactsList;
