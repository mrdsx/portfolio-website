import Skill from "@/components/skill";
import { tech } from "@/lib/technologies";

const NextJsSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <tech.nextjs.icon />
    {tech.nextjs.title}
  </Skill>
);

export { NextJsSkill };
