import Skill from "@/components/skill";
import { tech } from "@/lib/technologies";

const HtmlSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <tech.html.icon />
    {tech.html.title}
  </Skill>
);

export { HtmlSkill };
