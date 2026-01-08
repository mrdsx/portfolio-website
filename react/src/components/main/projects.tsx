import FastAPIIcon from "@/components/icons/fastapi";
import PythonIcon from "@/components/icons/python";
import ReactIcon from "@/components/icons/react";
import TailwindIcon from "@/components/icons/tailwindcss";
import TypescriptIcon from "@/components/icons/typescript";
import SVGTooltip from "@/components/svg-tooltip";
import {
  Card,
  CardDescription,
  CardFooter,
  CardGithubLink,
  CardHeader,
  CardImage,
  CardPreviewLink,
  CardSkills,
  CardTitle,
} from "@/components/ui/card";
import { getCDNImageURL } from "@/lib/utils";

import styles from "./Main.module.css";

const IMG_HEIGHT = 200;
const ovioImage = getCDNImageURL("ovio_irqhyp", IMG_HEIGHT);
const portfolioImage = getCDNImageURL("portfolio-website_r0cuwy", IMG_HEIGHT);

const Projects = () => (
  <div className={styles.section}>
    <h2 className={styles.sectionHeading}>Projects</h2>
    <div className="grid grid-cols-1 gap-4 sm:w-fit sm:grid-cols-2">
      <Card>
        <CardHeader>
          <CardImage src={ovioImage} alt="Olympiad Preparation" />
          <CardTitle>Olympiad Preparation</CardTitle>
          <CardDescription>
            Olympiad Preparation is handy tool, developed for preparing to
            olympiad "ОВИО Наше наследие"
          </CardDescription>
        </CardHeader>
        <CardSkills>
          <SVGTooltip content="Typescript">
            <TypescriptIcon />
          </SVGTooltip>
          <SVGTooltip content="React">
            <ReactIcon />
          </SVGTooltip>
          <SVGTooltip content="TailwindCSS">
            <TailwindIcon />
          </SVGTooltip>
          <SVGTooltip content="Python">
            <PythonIcon />
          </SVGTooltip>
          <SVGTooltip content="FastAPI">
            <FastAPIIcon />
          </SVGTooltip>
        </CardSkills>
        <CardFooter>
          <CardGithubLink />
          <CardPreviewLink previewURL="https://olympiad-preparation.vercel.app" />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardImage src={portfolioImage} alt="Portfolio Website" />
          <CardTitle>Portfolio Website</CardTitle>
          <CardDescription>
            Simple portfolio website for demonstrating technical skills and
            projects
          </CardDescription>
        </CardHeader>
        <CardSkills>
          <SVGTooltip content="Typescript">
            <TypescriptIcon />
          </SVGTooltip>
          <SVGTooltip content="React">
            <ReactIcon />
          </SVGTooltip>
          <SVGTooltip content="TailwindCSS">
            <TailwindIcon />
          </SVGTooltip>
        </CardSkills>
        <CardFooter>
          <CardGithubLink githubURL="https://github.com/mrdsx/react-portfolio-website" />
          <CardPreviewLink previewURL="#" />
        </CardFooter>
      </Card>
    </div>
  </div>
);

export default Projects;
