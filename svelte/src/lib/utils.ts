import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { CLOUD_NAME } from "@/lib/constant";

const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

const getCDNImageURL = (publicId: string, maxHeight: number): string => {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/q_90,f_auto,h_${maxHeight}/${publicId}`;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type WithoutChildren<T> = T extends { children?: any }
  ? Omit<T, "children">
  : T;
type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & {
  ref?: U | null;
};

export { cn, getCDNImageURL };
export type {
  WithElementRef,
  WithoutChild,
  WithoutChildren,
  WithoutChildrenOrChild,
};
