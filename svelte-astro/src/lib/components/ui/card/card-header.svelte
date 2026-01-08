<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  let { children }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class="mb-auto flex flex-col items-center gap-1">
  {@render children?.()}
</div>
