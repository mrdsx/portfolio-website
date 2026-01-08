import VercelIcon from "@/components/icons/vercel";
import Skill from "@/components/skill";

const VercelSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <VercelIcon />
    Vercel
  </Skill>
);

export default VercelSkill;
