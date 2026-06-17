import Skill from "@/components/skill";
import { tech } from "@/lib/technologies";

const CypressSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <tech.cypress.icon />
    {tech.cypress.title}
  </Skill>
);

export { CypressSkill };
