import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const GoBackButton = ({ href }: Pick<React.ComponentProps<"a">, "href">) => (
  <Button asChild>
    <a href={href}>
      <ArrowLeftIcon className="size-4" />
      Go back
    </a>
  </Button>
);

export default GoBackButton;
