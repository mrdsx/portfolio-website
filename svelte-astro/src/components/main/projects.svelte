<script>
  import {
      AstroIcon,
      FastAPIIcon,
      PythonIcon,
      ReactIcon,
      SvelteIcon,
      TailwindCSSIcon,
      TypescriptIcon,
  } from "@/components/icons";
  import SvgTooltip from "@/components/svg-tooltip.svelte";
  import {
      Card,
      CardDescription,
      CardFooter,
      CardGithubLink,
      CardHeader,
      CardImage,
      CardPreviewLink,
      CardSkills,
      CardTitle,
  } from "@/lib/components/ui/card";
  
  import { getCDNImageURL } from "@/lib/utils";
  import styles from "./Main.module.css";
  
  const IMG_HEIGHT = 200;
  const ovioImage = getCDNImageURL("ovio_irqhyp", IMG_HEIGHT);
  const portfolioImage = getCDNImageURL("portfolio-website_r0cuwy", IMG_HEIGHT);
</script>


<div class={styles.section}>
  <h2 class={styles.sectionHeading}>Projects</h2>
  <div class="grid grid-cols-1 gap-4 sm:w-fit sm:grid-cols-2">
    <Card>
      <CardHeader>
        <CardImage src={ovioImage} alt="Olympiad Preparation" />
        <CardTitle>Olympiad Preparation</CardTitle>
        <CardDescription>
          Olympiad Preparation is handy tool, developed for preparing to
          olympiad "ОВИО Наше наследие"
        </CardDescription>
      </CardHeader>
      <CardSkills>
        <SvgTooltip content="Typescript">
          <TypescriptIcon />
        </SvgTooltip>
        <SvgTooltip content="React">
          <ReactIcon />
        </SvgTooltip>
        <SvgTooltip content="TailwindCSS">
          <TailwindCSSIcon />
        </SvgTooltip>
        <SvgTooltip content="Python">
          <PythonIcon />
        </SvgTooltip>
        <SvgTooltip content="FastAPI">
          <FastAPIIcon />
        </SvgTooltip>
      </CardSkills>
      <CardFooter>
        <CardGithubLink />
        <CardPreviewLink previewURL="https://olympiad-preparation.vercel.app" />
      </CardFooter>
    </Card>
    <Card>
      <CardHeader>
        <CardImage src={portfolioImage} alt="Portfolio Website" />
        <CardTitle>Portfolio Website</CardTitle>
        <CardDescription>
          Simple portfolio website for demonstrating technical skills and
          projects
        </CardDescription>
      </CardHeader>
      <CardSkills>
        <SvgTooltip content="Typescript">
          <TypescriptIcon />
        </SvgTooltip>
        <SvgTooltip content="Svelte">
          <SvelteIcon />
        </SvgTooltip>
        <SvgTooltip content="Astro">
          <AstroIcon />
        </SvgTooltip>
        <SvgTooltip content="TailwindCSS">
          <TailwindCSSIcon />
        </SvgTooltip>
      </CardSkills>
      <CardFooter>
        <CardGithubLink
          githubURL="https://github.com/mrdsx/portfolio-website"
        />
        <CardPreviewLink previewURL="#" />
      </CardFooter>
    </Card>
  </div>
</div>
