import { EyeIcon } from "lucide-react";

import GlassButton from "@/components/glass-button";
import GithubIcon from "@/components/icons/github";
import { Button } from "@/components/ui/button";

const LINK_CLASSNAME = "flex-1";

const Card = ({ children }: React.PropsWithChildren) => (
  <GlassButton
    className="w-[90vw] flex-col gap-2 hover:bg-gray-900 hover:not-has-[img:hover]:bg-gray-800 sm:max-w-[300px] sm:min-w-[250px] [&>div]:w-full"
    size="lg"
  >
    {children}
  </GlassButton>
);

const CardHeader = ({ children }: React.PropsWithChildren) => (
  <div className="mb-auto flex flex-col items-center gap-1">{children}</div>
);

const CardFooter = ({ children }: React.PropsWithChildren) => (
  <div className="flex gap-2">{children}</div>
);

const CardImage = ({ ...props }: React.ComponentProps<"img">) => (
  <img className="h-[200px] border bg-gray-800 p-2" {...props} />
);

const CardTitle = ({ children }: React.PropsWithChildren) => (
  <h3 className="text-lg font-bold">{children}</h3>
);

const CardDescription = ({ children }: React.PropsWithChildren) => (
  <p className="text-justify text-sm">{children}</p>
);

const CardSkills = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-wrap gap-2">{children}</div>
);

const CardGithubLink = ({ githubURL }: { githubURL?: string }) => {
  if (githubURL) {
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

const CardPreviewLink = ({ previewURL }: { previewURL: string }) => (
  <Button className={LINK_CLASSNAME} asChild>
    <a href={previewURL} target="_blank">
      <EyeIcon />
      Preview
    </a>
  </Button>
);

export {
  Card,
  CardDescription,
  CardFooter,
  CardGithubLink,
  CardHeader,
  CardImage,
  CardPreviewLink,
  CardSkills,
  CardTitle,
};
