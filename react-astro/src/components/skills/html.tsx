import HTMLIcon from "@/components/icons/html";
import Skill from "@/components/skill";

const HTMLSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <HTMLIcon />
    HTML
  </Skill>
);

export default HTMLSkill;
