import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.module.scss";

function Layout() {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link to="/">HRnet</Link>
        </nav>
      </header>

      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
