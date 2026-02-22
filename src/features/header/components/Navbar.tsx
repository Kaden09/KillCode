function Navbar() {
  return (
    <nav>
      <ul className="flex gap-15 select-none">
        <li className="cursor-pointer hover:text-secondary-font duration-100">
          Наш подход
        </li>
        <li className="cursor-pointer hover:text-secondary-font duration-100">
          Технологии
        </li>
        <li className="cursor-pointer hover:text-secondary-font duration-100">
          Контакты
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
