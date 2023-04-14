import cl from "classnames";

import styles from "./style.module.scss";
import { ReactNode } from "react";

interface TitleProps {
  size?: "Medium" | "Large";
  children: ReactNode;
}

export const Title: React.FC<TitleProps> = ({ size = "Medium", children }) => (
  <h2 className={cl(styles.title, styles[`title${size}`])}>{children}</h2>
);
