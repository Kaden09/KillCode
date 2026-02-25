import ReactIcon from "@/shared/assets/icons/ReactIcon";
import TechnologyItem from "./TechnologyItem";
import {
  ActixIcon,
  AngularIcon,
  CIcon,
  CPPIcon,
  DjangoIcon,
  DockerIcon,
  ExpressIcon,
  FigmaIcon,
  GoIcon,
  LuaIcon,
  LucideIcon,
  NestIcon,
  NextIcon,
  NuxtIcon,
  PostgresIcon,
  PrismaIcon,
  PythonIcon,
  ReactQueryIcon,
  RedisIcon,
  ReduxIcon,
  RRDIcon,
  RustIcon,
  ShadcnIcon,
  SpringIcon,
  TailwindIcon,
  ThreeIcon,
  TypeScriptIcon,
  UnityIcon,
} from "@/shared/assets";
import { useMemo } from "react";

const data = [
  <ActixIcon />,
  <AngularIcon />,
  <CIcon />,
  <CPPIcon />,
  <DjangoIcon />,
  <DockerIcon />,
  <ExpressIcon />,
  <FigmaIcon />,
  <GoIcon />,
  <LuaIcon />,
  <LucideIcon />,
  <NestIcon />,
  <NextIcon />,
  <NuxtIcon />,
  <PostgresIcon />,
  <PrismaIcon />,
  <PythonIcon />,
  <ReactIcon />,
  <ReactQueryIcon />,
  <RedisIcon />,
  <ReduxIcon />,
  <RRDIcon />,
  <RustIcon />,
  <ShadcnIcon />,
  <SpringIcon />,
  <TailwindIcon />,
  <ThreeIcon />,
  <TypeScriptIcon />,
  <UnityIcon />,
  <ActixIcon />,
  <AngularIcon />,
  <CIcon />,
  <CPPIcon />,
  <DjangoIcon />,
  <DockerIcon />,
  <ExpressIcon />,
  <FigmaIcon />,
  <GoIcon />,
  <LuaIcon />,
  <LucideIcon />,
  <NestIcon />,
  <NextIcon />,
  <NuxtIcon />,
  <PostgresIcon />,
  <PrismaIcon />,
  <PythonIcon />,
  <ReactIcon />,
  <ReactQueryIcon />,
  <RedisIcon />,
  <ReduxIcon />,
  <RRDIcon />,
  <RustIcon />,
  <ShadcnIcon />,
  <SpringIcon />,
  <TailwindIcon />,
  <ThreeIcon />,
  <TypeScriptIcon />,
  <UnityIcon />,
];

function TechnologyCarousel() {
  const positions = useMemo(() => {
    const totalIcons = data.length;
    const startX = -180;
    const stepX = 180 / totalIcons;

    return data.map((_, index) => {
      const top = index % 2 === 0 ? 30 : 70;
      const randomOffset = ((index * 7) % 10) - 5;

      // Добавляем задержку анимации для каждого элемента
      // Чем больше индекс, тем больше задержка
      const animationDelay = `${-index * 0.1}s`; // 0.1 секунды между элементами

      return {
        left: `${startX + index * stepX}%`,
        top: `${top + randomOffset}%`,
        transform: "translate(-50%, -50%)",
        animationDelay, // Добавляем задержку
        // Если нужно, чтобы анимация начиналась с задержкой и для появления, и для исчезновения
        // animation: `technologyGlide 10s ${animationDelay} infinite`,
      };
    });
  }, []);

  return (
    <div className="flex items-center justify-center w-full max-w-500 relative h-full min-h-120 overflow-hidden">
      {data.map((icon, index) => (
        <TechnologyItem
          key={index}
          icon={icon}
          className="absolute animate-[technologyGlide_10s_ease-in-out_infinite]"
          style={positions[index]}
        />
      ))}
      <hr className="absolute top-10 left-0 w-px h-100 border-none bg-linear-to-b from-[#141414] via-contrast to-[#141414]" />
      <div className="absolute top30 -left-20 bg-contrast/30 blur-[60px] w-20 h-60"></div>
      <hr className="absolute top-10 right-0 w-px h-100 border-none bg-linear-to-b from-[#141414] via-white to-[#141414]" />
      <div className="absolute top-30 -right-20 bg-white/30 blur-[60px] w-20 h-60"></div>
    </div>
  );
}

export default TechnologyCarousel;
