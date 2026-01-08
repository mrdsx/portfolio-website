import FastAPISkill from "@/components/skills/fastapi";
import PythonSkill from "@/components/skills/python";
import ReactSkill from "@/components/skills/react";
import TailwindSkill from "@/components/skills/tailwindcss";
import TypescriptSkill from "@/components/skills/typescript";

import styles from "./Main.module.css";

const About = () => (
  <div className={styles.heading}>
    <h2 className={styles.sectionHeading}>About me</h2>
    <div className="flex flex-wrap items-center gap-x-1 leading-8">
      Fullstack developer, specializing in interactive full-fledged web apps
      with
      <ReactSkill size="sm" />,
      <TypescriptSkill size="sm" />,
      <TailwindSkill size="sm" />,
      <PythonSkill size="sm" /> and
      <FastAPISkill size="sm" />.
    </div>
  </div>
);

export default About;
