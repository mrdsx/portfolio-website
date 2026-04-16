import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SVGTooltip = ({
  content,
  children,
}: { content: string } & React.PropsWithChildren) => (
  <Tooltip>
    <TooltipTrigger className="[&_svg]:size-6" asChild>
      <span>{children}</span>
    </TooltipTrigger>
    <TooltipContent>{content}</TooltipContent>
  </Tooltip>
);

export default SVGTooltip;
