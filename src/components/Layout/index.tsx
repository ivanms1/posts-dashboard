import React from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MobileNavbar from "./MobileNavbar";

import useIsMobile from "../../hooks/useIsMobile";

import styles from "./Layout.module.scss";

interface Layout {
  children: React.ReactNode;
}

function Layout({ children }: Layout) {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <div className={styles.Layout}>
        <div className={styles.ContentContainer}>
          {!isMobile && <Sidebar />}
          <div className={styles.Page}>{children}</div>
        </div>
      </div>
    </>
  );
}

export default Layout;
