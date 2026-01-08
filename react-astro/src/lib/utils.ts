import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const CLOUD_NAME = "drkpov52o";

const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

const getCDNImageURL = (publicId: string, maxHeight: number): string => {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/q_90,f_auto,h_${maxHeight}/${publicId}`;
};

export { cn, getCDNImageURL };
