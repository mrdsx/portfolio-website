import { EyeIcon } from "lucide-react";

import GlassButton from "@/components/glass-button";
import GithubIcon from "@/components/icons/github";
import { Button } from "@/components/ui/button";

const LINK_CLASSNAME = "flex-1";

const Card = ({ children }: React.PropsWithChildren) => (
	<GlassButton
		className="w-full max-w-80 flex-col gap-2.5 hover:bg-gray-900 hover:not-has-[img:hover]:bg-gray-800"
		size="lg"
	>
		{children}
	</GlassButton>
);

const CardHeader = ({ children }: React.PropsWithChildren) => (
	<div className="mb-auto flex flex-col items-center gap-1">{children}</div>
);

const CardFooter = ({ children }: React.PropsWithChildren) => (
	<div className="flex w-full gap-2">{children}</div>
);

const CardBadges = ({ ...props }: React.ComponentProps<"div">) => (
	<div className="space-x-2 self-start pb-2" {...props} />
);

const CardImage = ({ ...props }: React.ComponentProps<"img">) => (
	<img className="h-[200px] border bg-gray-800 p-2" {...props} />
);

const CardTitle = ({ children }: React.PropsWithChildren) => (
	<h3 className="text-lg font-bold">{children}</h3>
);

const CardDescription = ({ children }: React.PropsWithChildren) => (
	<p className="text-justify text-xs">{children}</p>
);

const CardSkills = ({ children }: React.PropsWithChildren) => (
	<div className="flex flex-wrap gap-2 self-start">{children}</div>
);

const CardGithubLink = ({ githubURL }: { githubURL?: string }) => {
	if (githubURL !== undefined) {
		return (
			<Button className={LINK_CLASSNAME} asChild>
				<a href={githubURL} target="_blank">
					<GithubIcon />
					Github
				</a>
			</Button>
		);
	}

	return (
		<Button className={LINK_CLASSNAME} disabled aria-disabled>
			<GithubIcon />
			Github
		</Button>
	);
};

const CardProjectLink = ({ projectURL }: { projectURL?: string }) => {
	if (projectURL !== undefined) {
		return (
			<Button className={LINK_CLASSNAME} asChild>
				<a href={projectURL}>
					<EyeIcon />
					Live
				</a>
			</Button>
		);
	}

	return (
		<Button className={LINK_CLASSNAME} disabled aria-disabled>
			<EyeIcon />
			Live (soon)
		</Button>
	);
};

export {
	Card,
	CardBadges,
	CardDescription,
	CardFooter,
	CardGithubLink,
	CardHeader,
	CardImage,
	CardProjectLink,
	CardSkills,
	CardTitle,
};
