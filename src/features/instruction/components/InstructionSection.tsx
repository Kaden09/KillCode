import { useInView } from "react-intersection-observer";
import Instruction from "./Instruction";

function InstructionSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // Срабатывает только один раз
  });

  return (
    <div
      id="instruction"
      className="relative flex flex-col justify-center items-center gap-30 py-10 w-full"
    >
      <div className="flex flex-col gap-6">
        <h2
          ref={ref}
          className={`text-6xl text-center font-semibold opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "" }}
        >
          <span className="text-contrast">Как</span> заказать?
        </h2>
        <p
          ref={ref}
          className={`text-secondary-font text-center max-w-160 text-xl opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
          style={{ animationDelay: "0.1s" }}
        >
          Всё проще, чем вы думаете: короткая инструкция для тех, кто ценит своё
          время
        </p>
      </div>
      <div
        ref={ref}
        className={`w-[90%] h-30 rounded-full blur-[100px] bg-white/5 absolute top-115 opacity-0 ${inView && "animate-fade-in-bottom-100"}`}
      ></div>
      <Instruction />
    </div>
  );
}

export default InstructionSection;
