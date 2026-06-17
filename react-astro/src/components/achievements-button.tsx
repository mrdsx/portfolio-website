import { useEffect, useState } from "react";
import { toastAchievement } from "@/lib/utils";
import {
  finishAchievement,
  getCompletedAchievementsCount,
  isAchievementCompleted,
} from "@/store/achievements";

const AchievementsButton = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const completedCount = getCompletedAchievementsCount();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = () => {
    const isCompleted = isAchievementCompleted("visit-achievements-page");
    if (isCompleted) {
      window.location.href = "/achievements";
      return;
    }

    toastAchievement("visit-achievements-page");
    finishAchievement("visit-achievements-page");
    setTimeout(() => {
      window.location.href = "/achievements";
    }, 1000);
  };

  if (!isClient || completedCount === 0) {
    return null;
  }

  return (
    <button
      className="absolute right-5 bottom-0 h-10 w-8 bg-black outline outline-gray-500 cursor-pointer"
      type="button"
      onClick={handleClick}
    />
  );
};

export default AchievementsButton;
