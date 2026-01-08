<script>
  import { SQLiteIcon } from "@/components/icons";
  import Skill from "@/components/skill.svelte";

  let props = $props();
</script>

<Skill {...props}>
  <SQLiteIcon />
  SQLite
</Skill>
