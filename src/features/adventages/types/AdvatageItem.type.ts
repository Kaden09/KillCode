import type { ElementType, HTMLAttributes } from "react";

export interface IAdvantageItem extends HTMLAttributes<HTMLDivElement> {
  Icon: ElementType;
  title: string;
  desc: string;
}
