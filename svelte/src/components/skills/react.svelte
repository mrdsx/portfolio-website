<script>
  import { ReactIcon } from "@/components/icons";
  import Skill from "@/components/skill.svelte";

  let props = $props();
</script>

<Skill {...props}>
  <ReactIcon />
  React
</Skill>
