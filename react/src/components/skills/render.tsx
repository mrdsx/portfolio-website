import RenderIcon from "@/components/icons/render";
import Skill from "@/components/skill";

const RenderSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <RenderIcon />
    Render
  </Skill>
);

export default RenderSkill;
