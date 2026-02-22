import { SmallContact } from "@/features/contacts";
import { GmailIcon, TelegramIcon, XIcon } from "@/shared/assets";

const data = [
  {
    icon: <TelegramIcon />,
    link: "#",
  },
  {
    icon: <GmailIcon />,
    link: "#",
  },
  {
    icon: <XIcon />,
    link: "#",
  },
];

function FooterContactsList() {
  return (
    <div className="flex gap-4">
      {data.map((item) => (
        <SmallContact key={item.link} icon={item.icon} link={item.link} />
      ))}
    </div>
  );
}

export default FooterContactsList;
