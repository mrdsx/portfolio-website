import Skill from "@/components/skill";
import { tech } from "@/lib/technologies";

const AstroSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <tech.astro.icon />
    {tech.astro.title}
  </Skill>
);

export { AstroSkill };
