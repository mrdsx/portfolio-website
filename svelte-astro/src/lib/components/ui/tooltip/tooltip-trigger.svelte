<script lang="ts">
  import { Tooltip as TooltipPrimitive } from "bits-ui";

  let { ref = $bindable(null), ...restProps }: TooltipPrimitive.TriggerProps =
    $props();
</script>

<TooltipPrimitive.Trigger
  class="[&>svg]:size-6"
  bind:ref
  data-slot="tooltip-trigger"
  {...restProps}
/>
