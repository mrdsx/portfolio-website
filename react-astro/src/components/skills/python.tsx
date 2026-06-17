import Skill from "@/components/skill";
import { tech } from "@/lib/technologies";

const PythonSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <tech.python.icon />
    {tech.python.title}
  </Skill>
);

export { PythonSkill };
