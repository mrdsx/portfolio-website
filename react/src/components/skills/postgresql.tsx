import PostgreSQLIcon from "@/components/icons/postgresql";
import Skill from "@/components/skill";

const PostgreSQLSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <PostgreSQLIcon />
    PostgreSQL
  </Skill>
);

export default PostgreSQLSkill;
