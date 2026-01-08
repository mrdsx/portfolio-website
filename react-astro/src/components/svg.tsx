import { cn } from "@/lib/utils";

const SVG = ({ className, ...props }: React.ComponentProps<"svg">) => (
  <svg className={cn("max-w-10 min-w-4", className)} {...props} />
);

export default SVG;
