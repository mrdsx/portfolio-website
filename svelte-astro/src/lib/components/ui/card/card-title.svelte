<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  let { children }: HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<h3 class="text-lg font-bold">
  {@render children?.()}
</h3>
