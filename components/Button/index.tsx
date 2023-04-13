import styles from "./style.module.scss";
import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const ButtonSVG: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button>{children}</button>
);
