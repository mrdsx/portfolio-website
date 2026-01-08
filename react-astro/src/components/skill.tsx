import { type VariantProps } from "class-variance-authority";
import { useState } from "react";

import GlassButton, { glassButtonVariants } from "@/components/glass-button";

const Skill = ({
  children,
  size,
}: React.PropsWithChildren & VariantProps<typeof glassButtonVariants>) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <GlassButton
      className={isClicked ? "bg-gray-800 hover:bg-gray-700" : ""}
      onClick={() => setIsClicked((prev) => !prev)}
      size={size}
    >
      {children}
    </GlassButton>
  );
};

export default Skill;
