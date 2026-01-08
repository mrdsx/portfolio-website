<script lang="ts">
  import Svg from "@/components/svg.svelte";
  import type { SVGAttributes } from "svelte/elements";

  let props: SVGAttributes<SVGElement> = $props();
</script>

<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
  <path
    fill-rule="nonzero"
    fill="currentColor"
    fill-opacity={1}
    d="M63.984 17.184 127.964 128H0Zm0 0"
  />
</Svg>
