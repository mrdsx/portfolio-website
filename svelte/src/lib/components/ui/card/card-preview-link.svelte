<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { EyeIcon } from "@lucide/svelte";

  let { previewURL }: { previewURL: string } = $props();

  const LINK_CLASSNAME = "flex-1";
</script>

<Button class={LINK_CLASSNAME} href={previewURL} target="_blank">
  <EyeIcon />
  Preview
</Button>
