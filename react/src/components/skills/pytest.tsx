import PytestIcon from "@/components/icons/pytest";
import Skill from "@/components/skill";

const PytestSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <PytestIcon />
    Pytest
  </Skill>
);

export default PytestSkill;
