import TypescriptIcon from "@/components/icons/typescript";
import Skill from "@/components/skill";

const TypescriptSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <TypescriptIcon /> TypeScript
  </Skill>
);

export default TypescriptSkill;
