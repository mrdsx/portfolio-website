import Skill from "@/components/skill";
import { tech } from "@/lib/technologies";

const RenderSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <tech.render.icon />
    {tech.render.title}
  </Skill>
);

export { RenderSkill };
