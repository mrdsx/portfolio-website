import PyTestIcon from "@/components/icons/pytest";
import Skill from "@/components/skill";

const PyTestSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <PyTestIcon />
    PyTest
  </Skill>
);

export default PyTestSkill;
