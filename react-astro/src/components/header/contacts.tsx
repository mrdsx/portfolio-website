import GithubIcon from "@/components/icons/github";
import GmailIcon from "@/components/icons/gmail";
import { Button } from "@/components/ui/button";

const ContactsContent = () => (
  <>
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
  </>
);

export default ContactsContent;
