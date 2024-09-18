import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const gradients = [
  "from-[#2E15C5] to-[#481D7E]",
  "from-[#B715C5] to-[#361D7E]",
  "from-[#15C527] to-[#1D7E5B]",
  "from-[#C5157F] to-[#7E1D40]",
  "from-[#1571C5] to-[#1D337E]",
];

export function randomGradient() {
  return gradients[Math.floor(Math.random() * 5)];
}
