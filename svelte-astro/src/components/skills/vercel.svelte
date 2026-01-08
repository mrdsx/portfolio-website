<script>
  import { VercelIcon } from "@/components/icons";
  import Skill from "@/components/skill.svelte";

  let props = $props();
</script>

<Skill {...props}>
  <VercelIcon />
  Vercel
</Skill>
