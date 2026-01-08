<script lang="ts">
  import { Tooltip as TooltipPrimitive } from "bits-ui";

  let { open = $bindable(false), ...restProps }: TooltipPrimitive.RootProps =
    $props();
</script>

<TooltipPrimitive.Root delayDuration={0} bind:open {...restProps} />
