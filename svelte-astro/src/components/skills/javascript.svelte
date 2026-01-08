<script>
  import { JavascriptIcon } from "@/components/icons";
  import Skill from "@/components/skill.svelte";

  let props = $props();
</script>

<Skill {...props}>
  <JavascriptIcon />
  Javascript
</Skill>
