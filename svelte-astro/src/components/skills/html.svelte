<script>
  import { HTMLIcon } from "@/components/icons";
  import Skill from "@/components/skill.svelte";

  let props = $props();
</script>

<Skill {...props}>
  <HTMLIcon />
  HTML
</Skill>
