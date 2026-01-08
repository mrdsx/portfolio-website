import ReactIcon from "@/components/icons/react";
import Skill from "@/components/skill";

const ReactSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <ReactIcon />
    React
  </Skill>
);

export default ReactSkill;
