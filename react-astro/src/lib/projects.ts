import DevelopingBadge from "@/components/badges/developing";
import PersonalBadge from "@/components/badges/personal";
import ProprietaryBadge from "@/components/badges/proprietary";
import ToyProjectBadge from "@/components/badges/toy-project";
import AstroIcon from "@/components/icons/astro";
import FastAPIIcon from "@/components/icons/fastapi";
import FirebaseIcon from "@/components/icons/firebase";
import GithubActionsIcon from "@/components/icons/github-actions";
import GoIcon from "@/components/icons/go";
import NextJSIcon from "@/components/icons/next";
import PostgreSQLIcon from "@/components/icons/postgresql";
import PythonIcon from "@/components/icons/python";
import ReactIcon from "@/components/icons/react";
import SolidIcon from "@/components/icons/solid";
import SvelteIcon from "@/components/icons/svelte";
import TailwindIcon from "@/components/icons/tailwindcss";
import TypescriptIcon from "@/components/icons/typescript";
import {
  mrdsxObserverImage,
  ovioImage,
  placeholderImage,
  portfolioImage,
  pyAppCLIImage,
  swiftTrackerImage,
  wordGameImage,
} from "@/lib/images";

type Project = {
  name: string;
  description: string;
  image?: string;
  techStack: { icon: () => React.ReactElement; title: string }[];
  badges: (() => React.ReactElement)[];
  githubURL?: string;
  projectURL?: string;
};

const projects: Project[] = [
  {
    name: "Taskish",
    description: "A single-user self-hostable platform for managing tasks.",
    image: placeholderImage,
    techStack: [
      { icon: GoIcon, title: "Go" },
      { icon: PythonIcon, title: "Python" },
      { icon: FastAPIIcon, title: "FastAPI" },
      { icon: PostgreSQLIcon, title: "PostgreSQL" },
    ],
    badges: [DevelopingBadge, PersonalBadge],
    githubURL: "https://github.com/mrdsx/taskish",
  },
  {
    name: "mrdsx observer",
    description: "A public dashboard for monitoring my projects status.",
    image: mrdsxObserverImage,
    techStack: [
      { icon: TypescriptIcon, title: "TypeScript" },
      { icon: TailwindIcon, title: "TailwindCSS" },
      { icon: SolidIcon, title: "SolidStart" },
      { icon: PythonIcon, title: "Python" },
      { icon: FastAPIIcon, title: " FastAPI" },
      { icon: PostgreSQLIcon, title: "PostgreSQL" },
    ],
    badges: [ToyProjectBadge],
    githubURL: "https://github.com/mrdsx/mrdsx-observer",
    projectURL: "http://mrdsx-observer.ddns.net",
  },
  {
    name: "PyApp CLI",
    description:
      "A Python CLI for scaffolding Python projects with configurable tech stack (libraries/frameworks).",
    image: pyAppCLIImage,
    techStack: [
      { icon: PythonIcon, title: "Python" },
      { icon: GithubActionsIcon, title: "GitHub Actions" },
    ],
    badges: [PersonalBadge],
    projectURL: "https://pypi.org/project/pyapp-cli",
    githubURL: "https://github.com/mrdsx/pyapp-cli",
  },
  {
    name: "Classic word game",
    description: `A web game, based on rules of "Words chain" game and
    built with serverless backend and user authentication.`,
    image: wordGameImage,
    techStack: [
      { icon: TypescriptIcon, title: "TypeScript" },
      { icon: TailwindIcon, title: "TailwindCSS" },
      { icon: SvelteIcon, title: "Svelte" },
      { icon: PythonIcon, title: "Python" },
      { icon: FastAPIIcon, title: "FastAPI" },
      { icon: FirebaseIcon, title: "Firebase" },
    ],
    badges: [ToyProjectBadge],
    projectURL: "https://classic-word-game.vercel.app",
    githubURL: "https://github.com/mrdsx/word-game",
  },
  {
    name: "Swift Tracker",
    description: `An international payment tracker for fast
    transactions look up within the SWIFT GPI network.`,
    image: swiftTrackerImage,
    techStack: [
      { icon: TypescriptIcon, title: "TypeScript" },
      { icon: TailwindIcon, title: "TailwindCSS" },
      { icon: ReactIcon, title: "React" },
      { icon: AstroIcon, title: "Astro" },
    ],
    badges: [ProprietaryBadge],
    projectURL: "https://swift-tracker.net",
  },
  {
    name: "Portfolio Website",
    description: `A website that highlights my experience
    and the outcome of building software.`,
    image: portfolioImage,
    techStack: [
      { icon: TypescriptIcon, title: "TypeScript" },
      { icon: TailwindIcon, title: "TailwindCSS" },
      { icon: ReactIcon, title: "React" },
      { icon: AstroIcon, title: "Astro" },
    ],
    badges: [PersonalBadge],
    githubURL: "https://github.com/mrdsx/portfolio-website",
    projectURL: "https://mrdsx.vercel.app",
  },
  {
    name: "Olympiad Preparation",
    description: `A fullstack web application,
    developed for extensive preparation to the olympiad "ОВИО Наше наследие" (logo is above).`,
    image: ovioImage,
    techStack: [
      { icon: TypescriptIcon, title: "TypeScript" },
      { icon: TailwindIcon, title: "TailwindCSS" },
      { icon: NextJSIcon, title: "Next.js" },
      { icon: PythonIcon, title: "Python" },
      { icon: FastAPIIcon, title: "FastAPI" },
    ],
    badges: [ProprietaryBadge],
    projectURL: "https://olympiad-preparation.vercel.app",
  },
];

const relevantProjects: Project[] = projects.filter((project) =>
  ["Olympiad Preparation", "Swift Tracker"].includes(project.name),
);

export { type Project, projects, relevantProjects };
