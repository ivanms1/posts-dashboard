import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";

import Button from "../../Button";

import SearchIcon from "../../../assets/icons/search.svg";
import PickyLogo from "../../../../public/assets/picky-logo.png";

import styles from "./Navbar.module.scss";

const LINKS = [
  {
    id: "products",
    label: "Products",
  },
  {
    id: "discussions",
    label: "Discussions",
  },
  {
    id: "blog",
    label: "Blog",
  },
  {
    id: "our-story",
    label: "Our Story",
  },
];

function Navbar() {
  const [activeLink, setActiveLink] = useState("discussions");
  return (
    <div className={styles.Navbar}>
      <Button type="button" className={styles.LogoButton} noStyle>
        <Image className={styles.Logo} src={PickyLogo} alt="Picky Logo" />
      </Button>
      <div className={styles.RightSection}>
        <div className={styles.Links}>
          {LINKS.map((section) => (
            <Button
              className={classNames(styles.Link, {
                [styles.isActive]: activeLink === section.id,
              })}
              key={section.id}
              onClick={() => setActiveLink(section.id)}
              noStyle
            >
              {section.label}
            </Button>
          ))}
        </div>
        <div className={styles.SearchContainer}>
          <SearchIcon className={styles.SearchIcon} />
          <input
            className={styles.Search}
            placeholder="Products, brands, discussions"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
