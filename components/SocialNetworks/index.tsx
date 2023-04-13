import cl from "classnames";

import styles from "./style.module.scss";
import Link from "next/link";

interface SocialNetworksProps {}

const socialNetworks = [
  {
    id: 1,
    title: "DisCord",
    className: "DisCord",
    link: "https://discord.com/",
  },
  {
    id: 2,
    title: "Twitter",
    className: "Twitter",
    link: "https://twitter.com/",
  },
  {
    id: 3,
    title: "AntDesign",
    className: "AntDesign",
    link: "https://ant.design/",
  },
];

export const SocialNetworks: React.FC<SocialNetworksProps> = () => (
  <ul className={styles.socialNetworks}>
    {socialNetworks.map((link) => (
      <li key={link.id}>
        <Link
          href={link.link}
          target="_blank"
          rel="noreferrer"
          className={cl(
            styles.socialNetworksLink,
            styles[`socialNetworks${link.className}`]
          )}
        >
          {link.title}
        </Link>
      </li>
    ))}
  </ul>
);
