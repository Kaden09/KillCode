import { AboutBackgroundGrid } from "@/shared/assets";

function About() {
  return (
    <div className="flex flex-col gap-8 w-[50%] relative ml-10">
      <div className="absolute -top-30 -left-10 z-0">
        <AboutBackgroundGrid />
      </div>
      <div className="flex items-center gap-4 z-99">
        <div className="flex -gap-2">
          <div className="w-9 h-9 bg-neutral-700 rounded-full -mr-4 opacity-0 animate-fade-in-left"></div>
          <div
            className="w-9 h-9 bg-neutral-600 rounded-full -mr-4 opacity-0 animate-fade-in-left"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-9 h-9 bg-neutral-500 rounded-full opacity-0 animate-fade-in-left"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
        <p className="text-2xl">
          <span className="text-contrast">100+</span> Довольных клиентов
        </p>
      </div>
      <h1 className="text-6xl font-semibold z-99 mb-2 animate-fade-in-bottom-100">
        Студия <span className="text-contrast">разработки</span>
      </h1>
      <p
        className="text-secondary-font text-2xl z-99 w-[75%] leading-8 animate-fade-in-bottom-100"
        style={{ animationDelay: "0.1s" }}
      >
        Разрабатываем надежные современные цифровые решения. Активно
        поддерживаем рост и стабильность вашего бизнеса.
      </p>
      <div className="flex gap-3 z-99 mt-7">
        <a
          href="#"
          className="flex items-center justify-center bg-secondary-bg border border-border rounded-full py-3 px-7 text-xl font-medium hover:bg-secondary-bg-hover duration-150 opacity-0 animate-fade-in-right"
          style={{ animationDelay: "0.1s" }}
        >
          Оставить заявку
        </a>
        <a
          href="#"
          className="flex items-center justify-center bg-contrast-bg rounded-full text-tertiary-font py-3 text-xl px-9 font-medium hover:bg-contrast-bg-hover duration-150 opacity-0 animate-fade-in-right"
          style={{ animationDelay: "0.2s" }}
        >
          Портфолио
        </a>
      </div>
    </div>
  );
}

export default About;
