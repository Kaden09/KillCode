import { useInView } from "react-intersection-observer";

function Instruction() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // Срабатывает только один раз
  });
  return (
    <div ref={ref} className="relative w-full max-w-500">
      <svg
        viewBox="0 0 180 50"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="15"
          cy="35"
          r="3"
          fill="white"
          className={`opacity-0  ${inView && "animate-fade-in-from-small"}`}
          style={{ filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))" }}
        />
        <circle
          cx="50"
          cy="10"
          r="3"
          fill="white"
          className={`opacity-0 ${inView && "animate-fade-in-from-small"}`}
          style={{
            animationDelay: "0.2s",
            filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
          }}
        />
        <circle
          cx="80"
          cy="29"
          r="3"
          fill="white"
          className={`opacity-0 ${inView && "animate-fade-in-from-small"}`}
          style={{
            animationDelay: "0.4s",
            filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
          }}
        />
        <circle
          cx="120"
          cy="15"
          r="3"
          fill="white"
          className={`opacity-0 ${inView && "animate-fade-in-from-small"}`}
          style={{
            animationDelay: "0.6s",
            filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
          }}
        />
        <circle
          cx="160"
          cy="33"
          r="3"
          fill="white"
          className={`opacity-0 ${inView && "animate-fade-in-from-small"}`}
          style={{
            animationDelay: "0.8s",
            filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
          }}
        />
        <path
          d="M11 33 Q7 32 6 27"
          stroke="#f32b24"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-draw-red-line"}`}
          style={{ animationDelay: "1s" }}
        />
        <path
          d="M17 31 C27 15 40 25 48 13.4"
          stroke="#626262"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-draw-line"}`}
          style={{ animationDelay: "0.1s" }}
        />
        <path
          d="M52 13.5 Q60 27 76 29"
          stroke="#626262"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-draw-line"}`}
          style={{ animationDelay: "0.3s" }}
        />
        <path
          d="M84 29 Q111 28 117 17.8"
          stroke="#626262"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-draw-line"}`}
          style={{ animationDelay: "0.5s" }}
        />
        <path
          d="M123 17.9 Q135 33 156 33"
          stroke="#626262"
          strokeDasharray={2}
          strokeDashoffset={2}
          strokeWidth={0.5}
          className={`opacity-0 ${inView && "animate-draw-line"}`}
          style={{ animationDelay: "0.7s" }}
        />
      </svg>
      <div
        className={`absolute -left-[2%] top-[46%] -rotate-20 inline-block bg-secondary-bg rounded-full py-2 px-4 border border-contrast text-contrast opacity-0 ${inView && "animate-fade-in-top"}`}
        style={{ animationDelay: "1.2s" }}
      >
        <h3>Сейчас вы здесь</h3>
      </div>
      <div className="absolute bottom-0 -left-[0.7%] flex flex-col gap-2 items-center justify-center w-90">
        <h2
          className={`font-semibold text-2xl opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.2s" }}
        >
          Составление ТЗ
        </h2>
        <p
          className={`text-secondary-font text-center opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.3s" }}
        >
          Поможем составить и подобрать референсы под ваш проект
        </p>
      </div>
      <div className="absolute -top-12 left-[19%] flex flex-col gap-2 items-center justify-center w-90">
        <h2
          className={`font-semibold text-2xl opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.4s" }}
        >
          Оплата
        </h2>
        <p
          className={`text-secondary-font text-center opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.5s" }}
        >
          Принимаем предоплату 50% перед началом работы
        </p>
      </div>
      <div className="absolute bottom-14 left-[35.5%] flex flex-col gap-2 items-center justify-center w-90">
        <h2
          className={`font-semibold text-2xl opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.6s" }}
        >
          Промежуточный результат
        </h2>
        <p
          className={`text-secondary-font text-center opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.7s" }}
        >
          Вы оцените результат и если нужно дадите правки
        </p>
      </div>
      <div className="absolute top-5 right-[24%] flex flex-col gap-2 items-center justify-center w-90">
        <h2
          className={`font-semibold text-2xl opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.8s" }}
        >
          Вносим правки
        </h2>
        <p
          className={`text-secondary-font text-center opacity-0 ${inView && "animate-fade-in-top"}`}
          style={{ animationDelay: "0.9s" }}
        >
          Доводим результат до идеала
        </p>
      </div>
      <div className="absolute bottom-6 right-[2%] flex flex-col gap-2 items-center justify-center w-90">
        <h2
          className={`font-semibold text-2xl opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "1s" }}
        >
          Готовая работа
        </h2>
        <p
          className={`text-secondary-font text-center opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "1.1s" }}
        >
          Продукт полностью готовый к использованию
        </p>
      </div>
    </div>
  );
}

export default Instruction;
