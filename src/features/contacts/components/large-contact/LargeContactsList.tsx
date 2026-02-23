import { GmailIcon, TelegramIcon, XIcon } from "@/shared/assets";
import LargeContact from "./LargeContact";

const data = [
  {
    icon: <GmailIcon />,
    title: "Наш Email",
    value: "killcode.team@gmail.com",
    link: "#",
  },
  {
    icon: <TelegramIcon />,
    title: "Наш Email",
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
