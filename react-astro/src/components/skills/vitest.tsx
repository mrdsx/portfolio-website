import Skill from "@/components/skill";
import { tech } from "@/lib/technologies";

const VitestSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <tech.vitest.icon />
    {tech.vitest.title}
  </Skill>
);

export { VitestSkill };
