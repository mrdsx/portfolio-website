import JavascriptIcon from "@/components/icons/javascript";
import Skill from "@/components/skill";

const JavascriptSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <JavascriptIcon />
    Javascript
  </Skill>
);

export default JavascriptSkill;
