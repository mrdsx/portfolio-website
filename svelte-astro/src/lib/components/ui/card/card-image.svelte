<script lang="ts">
  import type { HTMLImgAttributes } from "svelte/elements";

  let { ...props }: HTMLImgAttributes = $props();
</script>

<img class="h-[200px] border bg-gray-800 p-2" {...props} />
