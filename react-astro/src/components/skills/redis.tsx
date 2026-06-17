import Skill from "@/components/skill";
import { tech } from "@/lib/technologies";

const RedisSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <tech.redis.icon />
    {tech.redis.title}
  </Skill>
);

export { RedisSkill };
