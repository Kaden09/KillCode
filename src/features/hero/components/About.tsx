import { AboutBackgroundGrid } from "@/shared/assets";

function About() {
  return (
    <div className="flex flex-col gap-5 w-[50%] relative">
      <div className="absolute -top-35 -left-10 z-0">
        <AboutBackgroundGrid />
      </div>
      <div className="flex items-center gap-4 z-99">
        <div className="flex -gap-2">
          <div className="w-7 h-7 bg-neutral-700 rounded-full -mr-4"></div>
          <div className="w-7 h-7 bg-neutral-600 rounded-full -mr-4"></div>
          <div className="w-7 h-7 bg-neutral-500 rounded-full"></div>
        </div>
        <p className="text-lg">
          <span className="text-contrast">100+</span> Довольных клиентов
        </p>
      </div>
      <h1 className="text-5xl font-semibold z-99 mb-2">
        Студия <span className="text-contrast">разработки</span>
      </h1>
      <p className="text-secondary-font text-lg z-99 w-[70%]">
        Разрабатываем надежные современные цифровые решения. Активно
        поддерживаем рост и стабильность вашего бизнеса.
      </p>
      <div className="flex gap-3 z-99 mt-7">
        <a
          href="#"
          className="flex items-center justify-center bg-secondary-bg border border-border rounded-full py-3 px-7 font-medium hover:bg-secondary-bg-hover duration-150"
        >
          Оставить заявку
        </a>
        <a
          href="#"
          className="flex items-center justify-center bg-contrast-bg rounded-full text-tertiary-font py-3 px-9 font-medium hover:bg-contrast-bg-hover duration-150"
        >
          Портфолио
        </a>
      </div>
    </div>
  );
}

export default About;
