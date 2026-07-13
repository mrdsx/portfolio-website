import {
  AstroIcon,
  CssIcon,
  CypressIcon,
  DockerIcon,
  FastApiIcon,
  FirebaseIcon,
  GitHubActionsIcon,
  GoIcon,
  HtmlIcon,
  NextJsIcon,
  PostgreSqlIcon,
  PyTestIcon,
  PythonIcon,
  ReactIcon,
  RedisIcon,
  RenderIcon,
  SolidIcon,
  SvelteIcon,
  TailwindCssIcon,
  TypeScriptIcon,
  VercelIcon,
  VitestIcon,
} from "@/components/icons";

type Technology = {
  icon: () => React.ReactElement;
  title: string;
};

const tech = {
  actions: { icon: GitHubActionsIcon, title: "GitHub Actions" },
  astro: { icon: AstroIcon, title: "Astro" },
  css: { icon: CssIcon, title: "CSS" },
  cypress: { icon: CypressIcon, title: "Cypress" },
  docker: { icon: DockerIcon, title: "Docker" },
  fastapi: { icon: FastApiIcon, title: "FastAPI" },
  firebase: { icon: FirebaseIcon, title: "Firebase" },
  go: { icon: GoIcon, title: "Go" },
  html: { icon: HtmlIcon, title: "HTML" },
  nextjs: { icon: NextJsIcon, title: "Next.js" },
  postgresql: { icon: PostgreSqlIcon, title: "PostgreSQL" },
  pytest: { icon: PyTestIcon, title: "PyTest" },
  python: { icon: PythonIcon, title: "Python" },
  react: { icon: ReactIcon, title: "React" },
  redis: { icon: RedisIcon, title: "Redis" },
  render: { icon: RenderIcon, title: "Render" },
  solidjs: { icon: SolidIcon, title: "Solid.js" },
  solidstart: { icon: SolidIcon, title: "SolidStart" },
  svelte: { icon: SvelteIcon, title: "Svelte" },
  tailwindcss: { icon: TailwindCssIcon, title: "TailwindCSS" },
  typescript: { icon: TypeScriptIcon, title: "TypeScript" },
  vercel: { icon: VercelIcon, title: "Vercel" },
  vitest: { icon: VitestIcon, title: "Vitest" },
} as const satisfies Record<string, Technology>;

export { tech };
