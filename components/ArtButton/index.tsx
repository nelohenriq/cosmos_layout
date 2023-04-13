import Link from "next/link";
import { ReactNode } from "react";
import cl from "classnames";

import styles from "./style.module.scss";

interface ArtButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const ArtButton: React.FC<ArtButtonProps> = ({ onClick, children }) => {
  return (
    <button className={cl(styles.artButton)} onClick={onClick}>
      <span className={styles.artButtonText}>{children}</span>
      <span className={styles.artButtonAngleLeft} />
      <span className={styles.artButtonAngleRight} />
    </button>
  );
};
