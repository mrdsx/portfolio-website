import PersonalBadge from "@/components/badges/personal";
import ProprietaryBadge from "@/components/badges/proprietary";
import ToyProjectBadge from "@/components/badges/toy-project";
import AstroIcon from "@/components/icons/astro";
import FastAPIIcon from "@/components/icons/fastapi";
import FirebaseIcon from "@/components/icons/firebase";
import NextJSIcon from "@/components/icons/next";
import PythonIcon from "@/components/icons/python";
import ReactIcon from "@/components/icons/react";
import SvelteIcon from "@/components/icons/svelte";
import TailwindIcon from "@/components/icons/tailwindcss";
import TypescriptIcon from "@/components/icons/typescript";
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
    description: `A web game, based on rules of "Words chain" game and
    built with serverless backend and user authentication.`,
    image: { src: wordGameImage, alt: "Word Game" },
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
    image: { src: swiftTrackerImage, alt: "Swift Tracker" },
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
    image: { src: portfolioImage, alt: "Portfolio Website" },
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
    description: `Fullstack web application,
    developed for extensive preparation to the olympiad "ОВИО Наше наследие" (logo is above).`,
    image: { src: ovioImage, alt: "Olympiad Preparation" },
    techStack: [
      { icon: TypescriptIcon, title: "TypeScript" },
      { icon: TailwindIcon, title: "TailwindCSS" },
      { icon: ReactIcon, title: "React" },
      { icon: NextJSIcon, title: "Next.js (modern backend)" },
      { icon: PythonIcon, title: "Python" },
      { icon: FastAPIIcon, title: "FastAPI (legacy backend)" },
    ],
    badges: [ProprietaryBadge],
    projectURL: "https://olympiad-preparation.vercel.app",
  },
];

const relevantProjects: Project[] = projects.filter((project) =>
  ["Olympiad Preparation", "Swift Tracker"].includes(project.name),
);

export { projects, relevantProjects };
