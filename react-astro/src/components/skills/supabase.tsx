import Skill from "@/components/skill";

import SupabaseIcon from "../icons/supabase";

const SupabaseSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <SupabaseIcon />
    Supabase
  </Skill>
);

export default SupabaseSkill;
