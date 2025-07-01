import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Formats like: "1 July 2025, 14:37"
export function formatDateTime(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // set to true for “2:37PM” style
  };

  return new Date(date).toLocaleString(undefined, options);
}
