import About from "./about";
import Projects from "./projects";
import Technologies from "./technologies";

const Main = () => (
  <main className="flex flex-col gap-8">
    <About />
    <Technologies />
    <Projects />
  </main>
);

export default Main;
