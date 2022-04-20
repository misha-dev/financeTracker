import { Link, Outlet } from "react-router-dom";
// styles
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <Link to={"/"} className={styles.title}>myMoney</Link>

          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
