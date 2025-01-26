import { ProjectCard } from "@components";

import { projectList } from "@/shared/data/projectList.ts";
import { Container } from "@/shared/ui/Container";

import s from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <Container>
      <h1 className={s.title}>Portfolio</h1>
      <ul className="flex flex-col gap-5 text-2xl">
        {projectList.map((p) => (
          <li key={p.name}>
            <ProjectCard type={p.type} name={p.name} stack={p.stack} links={p.links} screen={p.screen} ps={p.ps} />
          </li>
        ))}
      </ul>
    </Container>
  );
};
