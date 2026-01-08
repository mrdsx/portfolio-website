<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import GithubIcon from "@/components/icons/github.svelte";

  let { githubURL }: { githubURL?: string } = $props();

  const LINK_CLASSNAME = "flex-1";
</script>

{#if githubURL}
  <Button class={LINK_CLASSNAME} href={githubURL} target="_blank">
    <GithubIcon />
    Github
  </Button>
{:else}
  <Button class={LINK_CLASSNAME} disabled>
    <GithubIcon />
    Github
  </Button>
{/if}
