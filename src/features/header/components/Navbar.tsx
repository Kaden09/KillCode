function Navbar() {
  return (
    <nav>
      <ul className="flex gap-15 select-none">
        <a
          href="#advantages"
          className="cursor-pointer hover:text-secondary-font duration-100"
        >
          Преимущества
        </a>
        <a className="cursor-pointer hover:text-secondary-font duration-100">
          Технологии
        </a>
        <a className="cursor-pointer hover:text-secondary-font duration-100">
          Контакты
        </a>
        <a className="cursor-pointer hover:text-secondary-font duration-100">
          Портфолио
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
