<script>
  import { TailwindCSSIcon } from "@/components/icons";
  import Skill from "@/components/skill.svelte";

  let props = $props();
</script>

<Skill {...props}>
  <TailwindCSSIcon />
  TailwindCSS
</Skill>
