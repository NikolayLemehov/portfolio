import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => (
  <div className="container mx-auto min-w-[320px] max-w-[1920px] px-2 xs:px-4 lg:px-8 2xl:px-16">{children}</div>
);
