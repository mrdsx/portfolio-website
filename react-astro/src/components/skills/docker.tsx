import DockerIcon from "@/components/icons/docker";
import Skill from "@/components/skill";

const DockerSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
  <Skill {...props}>
    <DockerIcon />
    Docker
  </Skill>
);

export default DockerSkill;
