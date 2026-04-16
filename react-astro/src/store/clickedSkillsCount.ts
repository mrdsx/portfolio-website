import { atom } from "nanostores";

import {
  finishAchievement,
  isAchievementCompleted,
} from "@/store/achievements";

const $clickedSkillsCount = atom({ count: 0, max: 0 });

const registerSkill = (): void => {
  const newMax = $clickedSkillsCount.get().max + 1;
  $clickedSkillsCount.set({ ...$clickedSkillsCount.get(), max: newMax });
};

const incrementClickedSkillsCount = (
  onAchievementFinish?: () => void,
): void => {
  const newCount = $clickedSkillsCount.get().count + 1;
  const max = $clickedSkillsCount.get().max;
  if (newCount >= max && !isAchievementCompleted("click-all-skills")) {
    finishAchievement("click-all-skills", onAchievementFinish);
  }
  $clickedSkillsCount.set({
    ...$clickedSkillsCount.get(),
    count: newCount,
  });
};

const decrementClickedSkillsCount = (): void => {
  const newCount = $clickedSkillsCount.get().count - 1;
  $clickedSkillsCount.set({ ...$clickedSkillsCount.get(), count: newCount });
};

export {
  $clickedSkillsCount,
  decrementClickedSkillsCount,
  incrementClickedSkillsCount,
  registerSkill,
};
