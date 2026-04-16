import CypressIcon from "@/components/icons/cypress";
import Skill from "@/components/skill";

const CypressSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <CypressIcon />
    Cypress
  </Skill>
);

export default CypressSkill;
