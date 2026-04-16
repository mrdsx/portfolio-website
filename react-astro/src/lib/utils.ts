import { type ClassValue, clsx } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

import { type AchievementId, achievements } from "@/store/achievements";

const CLOUD_NAME = "drkpov52o";
const IMG_HEIGHT = 200;

const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

const getCDNImageURL = (publicId: string): string => {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/q_90,f_auto,h_${IMG_HEIGHT}/${publicId}`;
};

const randomChoice = (choices: unknown[]): unknown => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const toastAchievement = (id: AchievementId): void => {
  toast.success(`New achievement: ${achievements[id].title}`);
};

export { cn, getCDNImageURL, randomChoice, toastAchievement };
