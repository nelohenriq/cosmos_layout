import styles from "../styles/home.module.scss";
import cl from "classnames";

import { Logo } from "@/components/Logo";
import { SocialNetworks } from "@/components/SocialNetworks";
import { Navigation } from "@/components/Navigation";
import { Title } from "@/components/Title";
import { ArtButton } from "@/components/ArtButton";
import { ArtMenu } from "@/components/ArtMenu";

export default function Home() {
  return (
    <article>
      <section className={cl(styles.section, styles.sectionMain)}>
        <header className={styles.header}>
          <Logo />
          <SocialNetworks />
          <ArtButton className="" onClick={() => {}}>
            Whitepaper
          </ArtButton>
        </header>
        <Navigation />
        <div>
          <Title>FROM DUSK TO&nbsp;DAWN</Title>
          <ul className={styles.buttonList}>
            <li>
              <ArtButton className="" onClick={() => {}}>
                Mint
              </ArtButton>
            </li>
            <li>
              <ArtButton className="" onClick={() => {}}>
                Connect Wallet
              </ArtButton>
            </li>
          </ul>
        </div>
      </section>
      <section className={cl(styles.section, styles.sectionEarth)}>
        <Title size="Large">Factions</Title>
      </section>
      <ArtMenu />
    </article>
  );
}
