import DevelopingBadge from "@/components/badges/developing";
import PersonalBadge from "@/components/badges/personal";
import ProprietaryBadge from "@/components/badges/proprietary";
import ToyProjectBadge from "@/components/badges/toy-project";
import {
  mrdsxObserverImage,
  ovioImage,
  placeholderImage,
  portfolioImage,
  pyAppCLIImage,
  swiftTrackerImage,
  wordGameImage,
} from "@/lib/images";
import { tech } from "./technologies";

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
    techStack: [tech.go, tech.python, tech.fastapi, tech.postgresql],
    badges: [DevelopingBadge, PersonalBadge],
    githubURL: "https://github.com/mrdsx/taskish",
  },
  {
    name: "mrdsx observer",
    description: "A public dashboard for monitoring my projects status.",
    image: mrdsxObserverImage,
    techStack: [
      tech.typescript,
      tech.tailwindcss,
      tech.solidstart,
      tech.python,
      tech.fastapi,
      tech.postgresql,
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
    techStack: [tech.python, tech.actions],
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
      tech.typescript,
      tech.tailwindcss,
      tech.svelte,
      tech.python,
      tech.fastapi,
      tech.firebase,
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
    techStack: [tech.typescript, tech.tailwindcss, tech.react, tech.astro],
    badges: [ProprietaryBadge],
    projectURL: "https://swift-tracker.net",
  },
  {
    name: "Portfolio Website",
    description: `A website that highlights my experience
    and the outcome of building software.`,
    image: portfolioImage,
    techStack: [tech.typescript, tech.tailwindcss, tech.react, tech.astro],
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
      tech.typescript,
      tech.tailwindcss,
      tech.nextjs,
      tech.python,
      tech.fastapi,
    ],
    badges: [ProprietaryBadge],
    projectURL: "https://olympiad-preparation.vercel.app",
  },
];

const relevantProjects: Project[] = projects.filter((project) =>
  ["Olympiad Preparation", "Swift Tracker"].includes(project.name),
);

export { type Project, projects, relevantProjects };
