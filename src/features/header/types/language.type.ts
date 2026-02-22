export const LANGUAGE = {
  RU: "RU",
  EN: "EN",
} as const;

export type Language = (typeof LANGUAGE)[keyof typeof LANGUAGE];
