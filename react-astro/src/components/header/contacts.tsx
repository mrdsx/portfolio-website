import { GitHubIcon, GmailIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

const Contacts = () => (
  <>
    <Button size="lg" asChild>
      <a
        href="https://github.com/mrdsx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon className="size-5" />
      </a>
    </Button>
    <Button size="lg" asChild>
      <a href="mailto:kingofakneser@gmail.com">
        <GmailIcon className="size-5" />
      </a>
    </Button>
  </>
);

export default Contacts;
