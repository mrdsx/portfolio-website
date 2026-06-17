import Skill from "@/components/skill";
import { tech } from "@/lib/technologies";

const CssSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <tech.css.icon />
    {tech.css.title}
  </Skill>
);

export { CssSkill };
