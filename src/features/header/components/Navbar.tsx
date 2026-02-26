function Navbar() {
  return (
    <nav>
      <ul className="flex gap-15 select-none">
        <a
          href="#advantages"
          className="cursor-pointer hover:text-secondary-font duration-100 opacity-0 animate-fade-in-bottom-1s"
          style={{ animationDelay: "0.1s" }}
        >
          Преимущества
        </a>
        <a
          href="#instruction"
          className="cursor-pointer hover:text-secondary-font duration-100 opacity-0 animate-fade-in-bottom-1s"
          style={{ animationDelay: "0.2s" }}
        >
          Как заказать
        </a>
        <a
          href="#contacts"
          className="cursor-pointer hover:text-secondary-font duration-100 opacity-0 animate-fade-in-bottom-1s"
          style={{ animationDelay: "0.3s" }}
        >
          Контакты
        </a>
        <a
          className="cursor-pointer hover:text-secondary-font duration-100 opacity-0 animate-fade-in-bottom-1s"
          style={{ animationDelay: "0.4s" }}
        >
          Портфолио
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
