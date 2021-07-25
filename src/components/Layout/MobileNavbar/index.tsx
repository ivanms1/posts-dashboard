import Image from "next/image";

import Button from "../../Button";

import SearchIcon from "../../../assets/icons/search.svg";
import PickyLogo from "../../../../public/assets/picky-logo.png";
import Menu from "../../../assets/icons/menu.svg";

import styles from "./MobileNavbar.module.scss";

function MobileNavbar() {
  return (
    <div className={styles.MobileNavbar}>
      <div className={styles.RigthSide}>
        <Button type="button" className={styles.MenuButton} noStyle>
          <Menu className={styles.MenuIcon} />
        </Button>
        <Button type="button" className={styles.LogoButton} noStyle>
          <Image
            className={styles.Logo}
            width={25}
            height={25}
            src={PickyLogo}
            alt="Picky Logo"
          />
        </Button>
      </div>
      <div className={styles.LeftSide}>
        <Button className={styles.UseAppButton} noStyle>
          Use App
        </Button>
        <Button className={styles.SearchButton} noStyle>
          <SearchIcon className={styles.SearchIcon} />
        </Button>
      </div>
    </div>
  );
}

export default MobileNavbar;
