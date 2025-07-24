import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "./Layout.module.scss";

function Layout() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
