import AstroIcon from "@/components/icons/astro";
import Skill from "@/components/skill";

const AstroSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <AstroIcon />
    Astro
  </Skill>
);

export default AstroSkill;
