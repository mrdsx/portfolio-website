import RedisIcon from "@/components/icons/redis";
import Skill from "@/components/skill";

const RedisSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
	<Skill {...props}>
		<RedisIcon />
		Redis
	</Skill>
);

export default RedisSkill;
