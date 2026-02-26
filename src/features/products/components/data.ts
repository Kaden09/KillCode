import { I18nContext } from "@/shared/context/i18n-context";
import {
  AppWindow,
  BookCheck,
  Bot,
  BotMessageSquare,
  BrainCircuit,
  BrainCog,
  ChartGantt,
  ChartPie,
  FileTerminal,
  Globe,
  ShieldCheck,
} from "lucide-react";
import { useContext, useMemo } from "react";

const icons = [
  Bot,
  Globe,
  FileTerminal,
  BrainCog,
  BrainCircuit,
  ChartGantt,
  ShieldCheck,
  BookCheck,
  ChartPie,
  AppWindow,
  BotMessageSquare,
  Bot,
  Globe,
  FileTerminal,
  BrainCog,
  BrainCircuit,
  ChartGantt,
  ShieldCheck,
  BookCheck,
  ChartPie,
  AppWindow,
  BotMessageSquare,
];

export function useData() {
  const { language, i18n } = useContext(I18nContext);

  const data = useMemo(() => {
    if (!i18n[language]?.products) {
      console.warn("Products translations not found for language:", language);
      return [];
    }

    return icons.map((Icon, index) => ({
      Icon,
      title: i18n[language].products[index],
    }));
  }, [language, i18n]);

  return { data };
}
