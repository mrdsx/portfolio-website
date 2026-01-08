<script lang="ts">
  import GlassButton from "@/components/glass-button.svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";

  let { children }: HTMLButtonAttributes = $props();
</script>

<GlassButton
  size="lg"
  className="w-[90vw] flex-col gap-2 hover:bg-gray-900 hover:not-has-[img:hover]:bg-gray-800 sm:max-w-[300px] sm:min-w-[250px] [&>div]:w-full"
>
  {@render children?.()}
</GlassButton>
