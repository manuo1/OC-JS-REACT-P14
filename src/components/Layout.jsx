import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.module.scss";

function Layout() {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link to="/">HRnet</Link>
          <Link to="/employees">Employee List</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
