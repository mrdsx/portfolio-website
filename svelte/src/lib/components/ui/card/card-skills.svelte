<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  let { children }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class="flex flex-wrap gap-2 *:size-6">
  {@render children?.()}
</div>
