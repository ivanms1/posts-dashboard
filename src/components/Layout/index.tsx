import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import styles from "./Layout.module.scss";
import MobileNavbar from "./MobileNavbar";

interface Layout {
  children: React.ReactNode;
}

function Layout({ children }: Layout) {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <div className={styles.Layout}>
        <div className={styles.ContentContainer}>
          <Sidebar />
          <div className={styles.Page}>{children}</div>
        </div>
      </div>
    </>
  );
}

export default Layout;
