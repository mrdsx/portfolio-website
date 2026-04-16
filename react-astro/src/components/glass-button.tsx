import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

type GlassButtonProps = React.ComponentProps<"div"> &
  VariantProps<typeof glassButtonVariants>;

const glassButtonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 inline-flex w-fit cursor-pointer items-center gap-1 border leading-none transition-colors outline-none hover:bg-gray-800 focus-visible:ring-1 select-none",
  {
    variants: {
      size: {
        default: "gap-2 p-2 [&>svg]:w-6",
        sm: "p-1.25",
        lg: "p-4 select-text cursor-default",
      },
    },
    defaultVariants: { size: "default" },
  },
);

const GlassButton = ({ className, size, ...props }: GlassButtonProps) => (
  <div className={cn(glassButtonVariants({ size }), className)} {...props} />
);

export default GlassButton;
export { glassButtonVariants };
