import AstroSkill from "@/components/skills/astro";
import CSSSkill from "@/components/skills/css";
import FastAPISkill from "@/components/skills/fastapi";
import HTMLSkill from "@/components/skills/html";
import JavascriptSkill from "@/components/skills/javascript";
import NetlifySkill from "@/components/skills/netlify";
import PostgreSQLSkill from "@/components/skills/postgresql";
import PytestSkill from "@/components/skills/pytest";
import PythonSkill from "@/components/skills/python";
import RailwaySkill from "@/components/skills/railway";
import ReactSkill from "@/components/skills/react";
import RenderSkill from "@/components/skills/render";
import SQLiteSkill from "@/components/skills/sqlite";
import TailwindSkill from "@/components/skills/tailwindcss";
import TypescriptSkill from "@/components/skills/typescript";
import VercelSkill from "@/components/skills/vercel";

import styles from "./Main.module.css";

const Technologies = () => (
  <div className={styles.section}>
    <h2 className={styles.sectionHeading}>Technologies</h2>
    <div className="flex flex-col gap-2">
      <h3 className="min-w-30 font-semibold">Frontend</h3>
      <div className="flex flex-wrap gap-2">
        <HTMLSkill /> <CSSSkill /> <JavascriptSkill /> <TypescriptSkill />
        <ReactSkill /> <AstroSkill /> <TailwindSkill />
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="min-w-30 font-semibold">Backend</h3>
      <div className="flex flex-wrap gap-2">
        <PythonSkill /> <FastAPISkill /> <PostgreSQLSkill />
        <SQLiteSkill /> <PytestSkill />
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="min-w-30 font-semibold">Deployment</h3>
      <div className="flex flex-wrap gap-2">
        <VercelSkill /> <NetlifySkill /> <RenderSkill /> <RailwaySkill />
      </div>
    </div>
  </div>
);

export default Technologies;
