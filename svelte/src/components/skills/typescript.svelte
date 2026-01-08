<script>
  import { TypescriptIcon } from "@/components/icons";
  import Skill from "@/components/skill.svelte";

  let props = $props();
</script>

<Skill {...props}>
  <TypescriptIcon /> Typescript
</Skill>
