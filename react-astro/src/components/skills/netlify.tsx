import NetlifyIcon from "@/components/icons/netlify";
import Skill from "@/components/skill";

const NetlifySkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <NetlifyIcon />
    Netlify
  </Skill>
);

export default NetlifySkill;
