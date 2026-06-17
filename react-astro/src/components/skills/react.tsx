import Skill from "@/components/skill";
import { tech } from "@/lib/technologies";

const ReactSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <tech.react.icon />
    {tech.react.title}
  </Skill>
);

export { ReactSkill };
