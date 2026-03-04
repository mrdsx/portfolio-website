import Skill from "@/components/skill";

import FirebaseIcon from "../icons/firebase";

const FirebaseSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <FirebaseIcon />
    Firebase
  </Skill>
);

export default FirebaseSkill;
