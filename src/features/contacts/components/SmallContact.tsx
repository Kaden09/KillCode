interface ISmallContact {
  icon: React.ReactNode;
  link: string;
}

function SmallContact({ icon, link }: ISmallContact) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center justify-center bg-secondary-bg rounded-lg py-2 px-5 hover:bg-secondary-bg-hover cursor-pointer border border-border duration-100"
    >
      {icon}
    </a>
  );
}

export default SmallContact;
