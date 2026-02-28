import { type VariantProps } from "class-variance-authority";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import GlassButton, { glassButtonVariants } from "@/components/glass-button";
import { achievements } from "@/store/achievements";
import {
  decrementClickedSkillsCount,
  incrementClickedSkillsCount,
  registerSkill,
} from "@/store/clickedSkillsCount";

const Skill = ({
  children,
  size,
}: React.PropsWithChildren & VariantProps<typeof glassButtonVariants>) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onAchievementFinish = (): void => {
    toast.success(`New achievement: ${achievements["click-all-skills"].title}`);
  };

  useEffect(() => {
    registerSkill();
  }, []);

  return (
    <GlassButton
      className={isClicked ? "bg-gray-800 hover:bg-gray-700" : ""}
      onClick={() =>
        setIsClicked((prev) => {
          const isClicked = !prev;
          if (isClicked) {
            incrementClickedSkillsCount(onAchievementFinish);
          } else {
            decrementClickedSkillsCount();
          }
          return isClicked;
        })
      }
      size={size}
    >
      {children}
    </GlassButton>
  );
};

export default Skill;
