import Skill from "@/components/skill";
import { tech } from "@/lib/technologies";

const GithubActionsSkill = ({
  ...props
}: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <tech.actions.icon />
    {tech.actions.title}
  </Skill>
);

export { GithubActionsSkill };
