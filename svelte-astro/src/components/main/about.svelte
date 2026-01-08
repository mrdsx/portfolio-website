<script>
  import {
      FastAPISkill,
      PythonSkill,
      ReactSkill,
      TailwindCSSSkill,
      TypescriptSkill,
  } from "@/components/skills";

  import styles from "./Main.module.css";
</script>

<div class={styles.heading}>
  <h2 class={styles.sectionHeading}>About me</h2>
  <div class="flex flex-wrap items-center gap-x-1 leading-8">
    Fullstack developer, specializing in interactive full-fledged web apps with
    <ReactSkill size="sm" />,
    <TypescriptSkill size="sm" />,
    <TailwindCSSSkill size="sm" />,
    <PythonSkill size="sm" /> and
    <FastAPISkill size="sm" />.
  </div>
</div>
