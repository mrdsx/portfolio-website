import Skill from "@/components/skill";
import { tech } from "@/lib/technologies";

const VercelSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <tech.vercel.icon />
    {tech.vercel.title}
  </Skill>
);

export { VercelSkill };
