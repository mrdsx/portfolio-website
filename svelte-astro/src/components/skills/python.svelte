<script>
  import { PythonIcon } from "@/components/icons";
  import Skill from "@/components/skill.svelte";

  let props = $props();
</script>

<Skill {...props}>
  <PythonIcon /> Python
</Skill>
