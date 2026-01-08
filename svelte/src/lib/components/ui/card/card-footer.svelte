<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  let { children }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class="flex gap-2">
  {@render children?.()}
</div>
