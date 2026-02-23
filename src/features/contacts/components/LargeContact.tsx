interface ILargeContact {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
}

function LargeContact({ icon, title, value, link }: ILargeContact) {
  return (
    <a
      href={link}
      className="flex items-center w-full gap-3 bg-linear-to-r from-secondary-bg to-[#222222] py-5 px-4 border border-border rounded-2xl hover:scale-101 duration-150"
    >
      <span className="p-4 bg-tertiary-bg rounded-lg">{icon}</span>
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-secondary-font">{value}</p>
      </div>
    </a>
  );
}

export default LargeContact;
