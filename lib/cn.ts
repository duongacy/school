import clsx, { ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const fontSize = [
  "text-xs",
  "text-sm",
  "text-base",
  "text-lg",
  "text-xl",
  "text-2xl",
  "text-3xl",
  "text-4xl",
  "text-5xl",
  "text-6xl",
  "text-7xl",
  "text-8xl",
  "text-9xl",
];

const twMerge = extendTailwindMerge({
  override: {
    classGroups: {
      "font-size": fontSize,
    },
  },
});
export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));
