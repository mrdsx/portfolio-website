import Skill from "@/components/skill";
import { tech } from "@/lib/technologies";

const TypeScriptSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <tech.typescript.icon />
    {tech.typescript.title}
  </Skill>
);

export { TypeScriptSkill };
