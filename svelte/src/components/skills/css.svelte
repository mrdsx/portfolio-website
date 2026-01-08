<script>
  import { CSSIcon } from "@/components/icons";
  import Skill from "@/components/skill.svelte";

  let props = $props();
</script>

<Skill {...props}>
  <CSSIcon />
  CSS
</Skill>
