<script>
  import { NetlifyIcon } from "@/components/icons";
  import Skill from "@/components/skill.svelte";

  let props = $props();
</script>

<Skill {...props}>
  <NetlifyIcon />
  Netlify
</Skill>
