import PythonIcon from "@/components/icons/python";
import Skill from "@/components/skill";

const PythonSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <PythonIcon /> Python
  </Skill>
);

export default PythonSkill;
