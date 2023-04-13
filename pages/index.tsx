import styles from "../styles/home.module.scss";
import cl from "classnames";

import { Logo } from "@/components/Logo";
import { SocialNetworks } from "@/components/SocialNetworks";
import { ButtonSVG } from "@/components/Button";
import { Navigation } from "@/components/Navigation";
import { Title } from "@/components/Title";

export default function Home() {
  return (
    <article>
      <section className={cl(styles.section, styles.sectionMain)}>
        <header className={styles.header}>
          <Logo />
          <SocialNetworks />
          <ButtonSVG onClick={() => {}}>Whitepaper</ButtonSVG>
        </header>
        <Navigation />
        <div>
          <Title>FROM DUSK TO DAWN</Title>
          <ul className={styles.buttonList}>
            <li>
              <ButtonSVG onClick={() => {}}>Mint</ButtonSVG>
            </li>
            <li>
              <ButtonSVG onClick={() => {}}>Connect Wallet</ButtonSVG>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
