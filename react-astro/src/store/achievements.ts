import { persistentAtom } from "@nanostores/persistent";

type AchievementId = "click-all-skills";

const achievements: Record<
  AchievementId,
  { title: string; description: string }
> = {
  "click-all-skills": {
    title: "Infinity Gauntlet",
    description: "Click all skills on home page",
  },
};

const $completedAchievements = persistentAtom<AchievementId[]>(
  "completed-achievements",
  [],
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  },
);

const finishAchievement = (id: AchievementId): void => {
  const achievementExists = $completedAchievements.get().includes(id);
  if (!achievementExists) {
    $completedAchievements.set([...$completedAchievements.get(), id]);
  }
};

const isAchievementCompleted = (id: AchievementId): boolean => {
  return $completedAchievements.get().includes(id);
};

const getCompletedAchievementsCount = (): number => {
  return $completedAchievements.get().length;
};

export {
  $completedAchievements,
  achievements,
  finishAchievement,
  getCompletedAchievementsCount,
  isAchievementCompleted,
  type AchievementId,
};
