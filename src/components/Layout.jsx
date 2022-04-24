import { Link, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogOut } from "../hooks/useLogOut";
// styles
import styles from "./Layout.module.css";

export default function Layout() {
  const { logOut } = useLogOut();
  const { user } = useAuthContext();
  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <Link to={"/"} className={styles.title}>
            myMoney
          </Link>

          {user ? (
            <>
              <li>Hello, {user.displayName}</li>
              <li>
                <button className="btn" onClick={logOut}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
