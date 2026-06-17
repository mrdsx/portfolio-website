import Skill from "@/components/skill";
import { tech } from "@/lib/technologies";

const PostgreSqlSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <tech.postgresql.icon />
    {tech.postgresql.title}
  </Skill>
);

export { PostgreSqlSkill };
