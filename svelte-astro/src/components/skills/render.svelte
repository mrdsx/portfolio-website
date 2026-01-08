<script>
  import { RenderIcon } from "@/components/icons";
  import Skill from "@/components/skill.svelte";

  let props = $props();
</script>

<Skill {...props}>
  <RenderIcon />
  Render
</Skill>
