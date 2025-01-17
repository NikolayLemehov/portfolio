import { clsx } from "clsx";

import { ThemeMode } from "@/shared/types.ts";

import s from "./RadioBtn.module.css";

type Props = {
  isActive?: boolean;
  mode: ThemeMode;
  onClick: () => void;
};
export const RadioBtn = ({ mode, isActive = false, onClick }: Props) => {
  return (
    <button
      className={clsx(
        s.btn,
        isActive ? clsx(s.btnActive, "dark:bg-blue-500 dark:text-white") : "dark:bg-dark dark:text-light"
      )}
      type="button"
      onClick={onClick}
    >
      {mode}
    </button>
  );
};
