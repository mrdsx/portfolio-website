import NextJSIcon from "@/components/icons/next";
import Skill from "@/components/skill";

const NextJSSkill = ({ ...props }: React.ComponentProps<typeof Skill>) => (
	<Skill {...props}>
		<NextJSIcon />
		Next.js
	</Skill>
);

export default NextJSSkill;
