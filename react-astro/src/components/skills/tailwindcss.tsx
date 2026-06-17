import Skill from "@/components/skill";
import { tech } from "@/lib/technologies";

const TailwindCssSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <tech.tailwindcss.icon />
    {tech.tailwindcss.title}
  </Skill>
);

export { TailwindCssSkill };
