import Skill from "@/components/skill";
import { tech } from "@/lib/technologies";

const DockerSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <tech.docker.icon />
    {tech.docker.title}
  </Skill>
);

export { DockerSkill };
