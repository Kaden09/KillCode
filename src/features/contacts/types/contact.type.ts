import type { ElementType, HTMLAttributes } from "react";

export interface IContact extends HTMLAttributes<HTMLAnchorElement> {
  Icon: ElementType;
  title: string;
  value: string;
  link: string;
  ariaLabel: string;
  className?: string;
}
