import VitestIcon from "@/components/icons/vitest";
import Skill from "@/components/skill";

const VitestSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <VitestIcon />
    Vitest
  </Skill>
);

export default VitestSkill;
