import TailwindIcon from "@/components/icons/tailwindcss";
import Skill from "@/components/skill";

const TailwindSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <TailwindIcon />
    TailwindCSS
  </Skill>
);

export default TailwindSkill;
