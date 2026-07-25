import type Skill from "@/components/skill";
import {
  AstroSkill,
  CssSkill,
  CypressSkill,
  DockerSkill,
  FastApiSkill,
  FirebaseSkill,
  GithubActionsSkill,
  HtmlSkill,
  NextJsSkill,
  PostgreSqlSkill,
  PyTestSkill,
  PythonSkill,
  ReactSkill,
  RedisSkill,
  TailwindCssSkill,
  TypeScriptSkill,
  VitestSkill,
} from "@/components/skills";

type TechStackRecord = Record<
  string,
  ((props: React.ComponentProps<typeof Skill>) => React.JSX.Element)[]
>;

const techStack: TechStackRecord = {
  Frontend: [
    HtmlSkill,
    CssSkill,
    TypeScriptSkill,
    TailwindCssSkill,
    ReactSkill,
    NextJsSkill,
    AstroSkill,
  ],
  Backend: [
    PythonSkill,
    FastApiSkill,
    PostgreSqlSkill,
    FirebaseSkill,
    RedisSkill,
  ],
  "Automation && Deployment": [
    GithubActionsSkill,
    DockerSkill,
    VitestSkill,
    CypressSkill,
    PyTestSkill,
  ],
};

export { techStack };
