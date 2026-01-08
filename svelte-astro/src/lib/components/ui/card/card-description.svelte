<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  let { children }: HTMLAttributes<HTMLParagraphElement> = $props();
</script>

<p class="text-justify text-sm">
  {@render children?.()}
</p>
