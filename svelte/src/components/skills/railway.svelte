<script>
  import { RailwayIcon } from "@/components/icons";
  import Skill from "@/components/skill.svelte";

  let props = $props();
</script>

<Skill {...props}>
  <RailwayIcon />
  Railway
</Skill>
