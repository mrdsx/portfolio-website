import CSSIcon from "@/components/icons/css";
import Skill from "@/components/skill";

const CSSSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <CSSIcon />
    CSS
  </Skill>
);

export default CSSSkill;
