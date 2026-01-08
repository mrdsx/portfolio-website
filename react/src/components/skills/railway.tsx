import RailwayIcon from "@/components/icons/railway";
import Skill from "@/components/skill";

const RailwaySkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <RailwayIcon />
    Railway
  </Skill>
);

export default RailwaySkill;
