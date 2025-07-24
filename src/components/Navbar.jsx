import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>HRnet</div>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/employees">Current Employees</Link>
      </div>
    </nav>
  );
}

export default Navbar;
