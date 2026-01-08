<script>
  import { GithubIcon, GmailIcon } from "@/components/icons";
  import { Button } from "@/lib/components/ui/button";
</script>

<header class="flex justify-between pt-10 pb-20">
  <div class="flex items-center gap-3">
    <img class="size-12 rounded-full" src="/avatar.png" alt="mrdsx" />
    <div class="flex flex-col text-lg">
      <h1 class="font-bold">mrdsx</h1>
      <span class="text-muted-foreground text-sm"> Fullstack developer </span>
    </div>
  </div>
  <div class="flex gap-2">
    <Button size="lg" href="https://github.com/mrdsx" target="_blank">
      <GithubIcon class="size-5" />
    </Button>
    <Button size="lg" href="mailto:kingofakneser@gmail.com">
      <GmailIcon class="size-5" />
    </Button>
  </div>
</header>
