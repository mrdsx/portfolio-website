import Skill from "@/components/skill";
import { tech } from "@/lib/technologies";

const FirebaseSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <tech.firebase.icon />
    {tech.firebase.title}
  </Skill>
);

export { FirebaseSkill };
