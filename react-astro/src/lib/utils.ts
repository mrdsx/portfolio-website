import { type ClassValue, clsx } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

import { type AchievementId, achievements } from "@/store/achievements";

const CLOUD_NAME = "drkpov52o";

const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

const getCDNImageURL = (publicId: string, maxHeight: number): string => {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/q_90,f_auto,h_${maxHeight}/${publicId}`;
};

const toastAchievement = (id: AchievementId): void => {
  toast.success(`New achievement: ${achievements[id].title}`);
};

export { cn, getCDNImageURL, toastAchievement };
