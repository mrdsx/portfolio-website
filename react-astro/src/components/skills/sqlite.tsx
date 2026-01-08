import SQLiteIcon from "@/components/icons/sqlite";
import Skill from "@/components/skill";

const SQLiteSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <SQLiteIcon />
    SQLite
  </Skill>
);

export default SQLiteSkill;
