import GithubIcon from "@/components/icons/github";
import GmailIcon from "@/components/icons/gmail";
import { Button } from "@/components/ui/button";

const Header = () => (
  <header className="flex justify-between pt-10 pb-20">
    <div className="flex items-center gap-3">
      <img className="size-12 rounded-full" src="/avatar.png" alt="mrdsx" />
      <div className="flex flex-col text-lg">
        <h1 className="font-bold">mrdsx</h1>
        <span className="text-muted-foreground text-sm">
          Fullstack developer
        </span>
      </div>
    </div>
    <div className="flex gap-2">
      <Button size="lg" asChild>
        <a href="https://github.com/mrdsx" target="_blank">
          <GithubIcon className="size-5" />
        </a>
      </Button>
      <Button size="lg" asChild>
        <a href="mailto:kingofakneser@gmail.com">
          <GmailIcon className="size-5" />
        </a>
      </Button>
    </div>
  </header>
);
export default Header;
