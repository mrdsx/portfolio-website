<script>
  import { AstroIcon } from "@/components/icons";
  import Skill from "@/components/skill.svelte";

  let props = $props();
</script>

<Skill {...props}>
  <AstroIcon />
  Astro
</Skill>
