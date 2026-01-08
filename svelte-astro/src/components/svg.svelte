<script lang="ts">
  import { cn } from "@/lib/utils";
  import type { SVGAttributes } from "svelte/elements";

  let { children, className, ...props }: SVGAttributes<SVGElement> = $props();
</script>

<svg class={cn("max-w-10 min-w-4", className)} {...props}>
  {@render children?.()}
</svg>
