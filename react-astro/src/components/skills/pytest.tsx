import Skill from "@/components/skill";
import { tech } from "@/lib/technologies";

const PyTestSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <tech.pytest.icon />
    {tech.pytest.title}
  </Skill>
);

export { PyTestSkill };
