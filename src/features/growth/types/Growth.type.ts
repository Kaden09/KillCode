import type { HTMLAttributes } from "react";

export interface IGrowthStep extends HTMLAttributes<HTMLDivElement> {
  title: string;
  desc: string;
  className?: string;
}
