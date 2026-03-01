import { I18nContext } from "@/shared/context/i18n-context";
import {
  AppWindow,
  Bitcoin,
  BookCheck,
  Bot,
  BotMessageSquare,
  BrainCircuit,
  BrainCog,
  ChartGantt,
  ChartNetwork,
  ChartPie,
  FileTerminal,
  Globe,
  Handshake,
  ShieldCheck,
  ShoppingBasket,
  Smartphone,
  TrendingUp,
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
];

const icons2 = [
  ChartNetwork,
  TrendingUp,
  Bitcoin,
  ShoppingBasket,
  BrainCog,
  AppWindow,
  Handshake,
  Smartphone,
  Bot,
  ShieldCheck,
  BrainCircuit,
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

  const data2 = useMemo(() => {
    if (!i18n[language]?.products) {
      console.warn("Products translations not found for language:", language);
      return [];
    }

    return icons2.map((Icon, index) => ({
      Icon,
      title: i18n[language].products2[index],
    }));
  }, [language, i18n]);

  return { data, data2 };
}
