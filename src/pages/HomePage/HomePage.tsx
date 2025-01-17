import { ProjectCard } from "@components";

import s from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className="container mx-auto border-2 border-solid border-cyan-500">
      <h1 className={s.title}>Portfolio</h1>
      <ul className="background-cyan-500 flex space-x-2 text-2xl md:space-x-14">
        <li>
          <ProjectCard type="box" />
        </li>
        <li>Weather</li>
        <li>Weather</li>
      </ul>
    </div>
  );
};
