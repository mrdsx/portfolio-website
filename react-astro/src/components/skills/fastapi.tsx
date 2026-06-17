import Skill from "@/components/skill";
import { tech } from "@/lib/technologies";

const FastApiSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <tech.fastapi.icon />
    {tech.fastapi.title}
  </Skill>
);

export { FastApiSkill };
