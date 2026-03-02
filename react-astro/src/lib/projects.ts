import PersonalBadge from "@/components/badges/personal";
import ProprietaryBadge from "@/components/badges/proprietary";
import ToyProjectBadge from "@/components/badges/toy-project";
import AstroIcon from "@/components/icons/astro";
import FastAPIIcon from "@/components/icons/fastapi";
import NetlifyIcon from "@/components/icons/netlify";
import NextJSIcon from "@/components/icons/next";
import PythonIcon from "@/components/icons/python";
import ReactIcon from "@/components/icons/react";
import RenderIcon from "@/components/icons/render";
import SvelteIcon from "@/components/icons/svelte";
import TailwindIcon from "@/components/icons/tailwindcss";
import TypescriptIcon from "@/components/icons/typescript";
import VercelIcon from "@/components/icons/vercel";
import {
  ovioImage,
  portfolioImage,
  swiftTrackerImage,
  wordGameImage,
} from "@/lib/images";

type Project = {
  name: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  techStack: { icon: () => React.ReactElement; title: string }[];
  badges: (() => React.ReactElement)[];
  githubURL?: string;
  projectURL: string;
};

const projects: Project[] = [
  {
    name: "Word Game",
    description: `Web game where user must come up with words
    and each new word has to start with last letter from previous word.`,
    image: { src: wordGameImage, alt: "Word Game" },
    techStack: [
      { icon: TypescriptIcon, title: "TypeScript" },
      { icon: TailwindIcon, title: "TailwindCSS" },
      { icon: SvelteIcon, title: "Svelte" },
      { icon: NetlifyIcon, title: "Netlify" },
    ],
    badges: [ToyProjectBadge],
    projectURL: "https://sunny-sunburst-407336.netlify.app",
    githubURL: "https://github.com/mrdsx/word-game",
  },
  {
    name: "Swift Tracker",
    description: `International payment tracker for fast
    transactions look up within SWIFT GPI network.`,
    image: { src: swiftTrackerImage, alt: "Swift Tracker" },
    techStack: [
      { icon: TypescriptIcon, title: "TypeScript" },
      { icon: TailwindIcon, title: "TailwindCSS" },
      { icon: ReactIcon, title: "React" },
      { icon: AstroIcon, title: "Astro" },
      { icon: VercelIcon, title: "Vercel" },
    ],
    badges: [ProprietaryBadge],
    projectURL: "https://swift-tracker.net",
  },
  {
    name: "Portfolio Website",
    description: `Simple portfolio website
    for demonstrating technical skills and projects.`,
    image: { src: portfolioImage, alt: "Portfolio Website" },
    techStack: [
      { icon: TypescriptIcon, title: "TypeScript" },
      { icon: TailwindIcon, title: "TailwindCSS" },
      { icon: ReactIcon, title: "React" },
      { icon: AstroIcon, title: "Astro" },
      { icon: VercelIcon, title: "Vercel" },
    ],
    badges: [PersonalBadge],
    githubURL: "https://github.com/mrdsx/portfolio-website",
    projectURL: "https://mrdsx.vercel.app",
  },
  {
    name: "Olympiad Preparation",
    description: `Olympiad Preparation is production-ready
    and actively maintained app, developed for preparing to
    olympiad \"ОВИО Наше наследие\".`,
    image: { src: ovioImage, alt: "Olympiad Preparation" },
    techStack: [
      { icon: TypescriptIcon, title: "TypeScript" },
      { icon: TailwindIcon, title: "TailwindCSS" },
      { icon: ReactIcon, title: "React" },
      { icon: NextJSIcon, title: "Next.js" },
      { icon: PythonIcon, title: "Python" },
      { icon: FastAPIIcon, title: "FastAPI" },
      { icon: VercelIcon, title: "Vercel" },
      { icon: RenderIcon, title: "Render" },
    ],
    badges: [ProprietaryBadge],
    projectURL: "https://olympiad-preparation.vercel.app",
  },
];

const relevantProjects: Project[] = projects.filter((project) =>
  ["Olympiad Preparation", "Swift Tracker"].includes(project.name),
);

export { projects, relevantProjects };
