import Link from "next/link";

import styles from "./style.module.scss";
import { ReactNode } from "react";

interface TitleProps {
  size?: "Medium" | "Large";
  children: ReactNode;
}

export const Title: React.FC<TitleProps> = ({ size = "Medium", children }) => (
  <h2>{children}</h2>
);
