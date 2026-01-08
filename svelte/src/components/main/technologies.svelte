<script>
  import {
    AstroSkill,
    CSSSkill,
    FastAPISkill,
    HTMLSkill,
    JavascriptSkill,
    NetlifySkill,
    PostgreSQLSkill,
    PyTestSkill,
    PythonSkill,
    RailwaySkill,
    ReactSkill,
    RenderSkill,
    SQLiteSkill,
    TailwindCSSSkill,
    TypescriptSkill,
    VercelSkill,
  } from "@/components/skills";

  import styles from "./Main.module.css";
</script>

<div class={styles.section}>
  <h2 class={styles.sectionHeading}>Technologies</h2>
  <div class="flex flex-col gap-2">
    <h3 class="min-w-30 font-semibold">Frontend</h3>
    <div class="flex flex-wrap gap-2">
      <HTMLSkill />
      <CSSSkill />
      <JavascriptSkill />
      <TypescriptSkill />
      <ReactSkill />
      <AstroSkill />
      <TailwindCSSSkill />
    </div>
  </div>
  <div class="flex flex-col gap-2">
    <h3 class="min-w-30 font-semibold">Backend</h3>
    <div class="flex flex-wrap gap-2">
      <PythonSkill />
      <FastAPISkill />
      <PostgreSQLSkill />
      <SQLiteSkill />
      <PyTestSkill />
    </div>
  </div>
  <div class="flex flex-col gap-2">
    <h3 class="min-w-30 font-semibold">Deployment</h3>
    <div class="flex flex-wrap gap-2">
      <VercelSkill />
      <NetlifySkill />
      <RenderSkill />
      <RailwaySkill />
    </div>
  </div>
</div>
