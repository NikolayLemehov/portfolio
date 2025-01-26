import { ReactNode } from "react";

import { BlankLink } from "@/shared/ui/Link";

import s from "./ProjectCard.module.scss";

type LinkType = {
  name: string;
  url: string;
};
type Props = {
  name: string;
  stack: string;
  links?: LinkType[];
  screen?: string;
  ps?: string;
  type: "box" | "detail";
};

export const ProjectCard = ({ name, stack, links, screen, ps }: Props) => {
  return (
    <div className={s.container}>
      <div className={s.imgWrapper}>
        <img className={s.img} src={screen} width="200" height="auto" alt="screen" />
      </div>
      <div className={s.info}>
        <p>Name: {name}</p>
        <p>Stack: {stack}</p>
        <p>
          {links && (
            <>
              Links:{" "}
              {links.reduce((acc, l, index) => {
                acc.push(
                  <BlankLink key={l.url} to={l.url}>
                    {l.name}
                  </BlankLink>
                );
                if (index !== links.length - 1) {
                  acc.push(", ");
                }

                return acc;
              }, [] as ReactNode[])}
            </>
          )}
        </p>
        {ps && <p>Note: {ps}</p>}
      </div>
    </div>
  );
};
