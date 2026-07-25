import { techStack } from "@/lib/tech-stack";
import styles from "./Main.module.css";

function Technologies() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionHeading}>Technologies</h2>
      {Object.entries(techStack).map(([category, technologies]) => (
        <div className="flex flex-col gap-2" key={category}>
          <h3 className="min-w-30 font-semibold">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((Technology, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: list is fixed
              <Technology key={index} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export { Technologies };
