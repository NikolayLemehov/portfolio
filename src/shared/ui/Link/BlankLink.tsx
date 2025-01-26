import { ReactNode } from "react";

import s from "./BlankLink.module.scss";

type Props = {
  to: string;
  children: ReactNode;
};

export const BlankLink = ({ to, children }: Props) => {
  return (
    <a className={s.link} href={to} target="_blank" rel="nofollow noopener noreferrer">
      {children}
    </a>
  );
};
