<script lang="ts">
  import GlassButton, {
    type GlassButtonProps,
  } from "@/components/glass-button.svelte";

  let { size, children }: GlassButtonProps = $props();

  let isClicked = $state(false);
</script>

<GlassButton
  className={isClicked ? "bg-gray-800 hover:bg-gray-700" : ""}
  onclick={() => (isClicked = !isClicked)}
  {size}
>
  {@render children?.()}
</GlassButton>
