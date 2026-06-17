import { Button } from "@/components/ui/button";
import { resetCompletedAchievements } from "@/store/achievements";

const ResetAchievementsButton = () => {
  const handleClick = () => {
    resetCompletedAchievements();
    window.location.href = "/";
  };

  return (
    <Button variant="destructive" onClick={handleClick}>
      Reset achievements
    </Button>
  );
};

export default ResetAchievementsButton;
