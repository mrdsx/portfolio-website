<script lang="ts">
  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/lib/components/ui/tooltip";
  import type { HTMLAttributes } from "svelte/elements";

  type SvgTooltipProps = { content: string } & HTMLAttributes<any>;

  let { children, content }: SvgTooltipProps = $props();
</script>

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
      {@render children?.()}
    </TooltipTrigger>
    <TooltipContent>{content}</TooltipContent>
  </Tooltip>
</TooltipProvider>
