import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
//styles
import styles from "./Navbar.module.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { logout } = useLogout();

  const { user } = useAuthContext();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>OliveBank</li>
        {user && (
          <>
            <li>hello, {user.displayName}</li>
            <li>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
