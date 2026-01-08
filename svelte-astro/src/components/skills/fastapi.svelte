<script>
  import { FastAPIIcon } from "@/components/icons";
  import Skill from "@/components/skill.svelte";

  let props = $props();
</script>

<Skill {...props}>
  <FastAPIIcon /> FastAPI
</Skill>
