<script lang="ts" module>
  import { cn } from "@/lib/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import { tv, type VariantProps } from "tailwind-variants";

  type GlassButtonProps = {
    className: string;
  } & VariantProps<typeof glassButtonVariants> &
    HTMLAttributes<HTMLDivElement>;

  const glassButtonVariants = tv({
    base: "focus-visible:border-ring focus-visible:ring-ring/50 inline-flex w-fit cursor-pointer items-center gap-1 border leading-none transition-colors outline-none hover:bg-gray-800 focus-visible:ring-1 select-none",
    variants: {
      size: {
        default: "gap-2 p-2 [&>svg]:w-6",
        sm: "p-1.25 [&>svg]:w-4",
        lg: "p-4 select-text cursor-default",
      },
    },
    defaultVariants: { size: "default" },
  });

  export { glassButtonVariants };
  export type { GlassButtonProps };
</script>

<script lang="ts">
  let { className, children, size, ...props }: GlassButtonProps = $props();
</script>

<div class={cn(glassButtonVariants({ size }), className)} {...props}>
  {@render children?.()}
</div>
