import FastAPIIcon from "@/components/icons/fastapi";
import Skill from "@/components/skill";

const FastAPISkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <FastAPIIcon /> FastAPI
  </Skill>
);

export default FastAPISkill;
