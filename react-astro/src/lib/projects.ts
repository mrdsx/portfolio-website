import AstroIcon from "@/components/icons/astro";
import FastAPIIcon from "@/components/icons/fastapi";
import GithubActionsIcon from "@/components/icons/github-actions";
import PythonIcon from "@/components/icons/python";
import ReactIcon from "@/components/icons/react";
import TailwindIcon from "@/components/icons/tailwindcss";
import TypescriptIcon from "@/components/icons/typescript";

import { getCDNImageURL } from "./utils";

type Project = {
  name: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  techStack: { icon: () => React.ReactElement; title: string }[];
  githubURL?: string;
  projectURL: string;
};

const IMG_HEIGHT = 200;
const swiftTrackerImage = getCDNImageURL("swift-tracker_guijc3", IMG_HEIGHT);
const ovioImage = getCDNImageURL("ovio_irqhyp", IMG_HEIGHT);
const portfolioImage = getCDNImageURL("portfolio-website_r0cuwy", IMG_HEIGHT);

const projects: Project[] = [
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
    ],
    projectURL: "https://swift-tracker.net",
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
      { icon: PythonIcon, title: "Python" },
      { icon: FastAPIIcon, title: "FastAPI" },
      { icon: GithubActionsIcon, title: "Github Actions" },
    ],
    projectURL: "https://olympiad-preparation.vercel.app",
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
    ],
    githubURL: "https://github.com/mrdsx/portfolio-website",
    projectURL: "https://mrdsx.vercel.app",
  },
];

const relevantProjects: Project[] = projects.filter((project) =>
  ["Olympiad Preparation", "Swift Tracker"].includes(project.name),
);

export { projects, relevantProjects };
