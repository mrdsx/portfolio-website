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
    <TooltipTrigger asChild>
      <span>{children}</span>
    </TooltipTrigger>
    <TooltipContent>{content}</TooltipContent>
  </Tooltip>
);

export default SVGTooltip;
