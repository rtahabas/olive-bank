import { useLogout } from "../../hooks/useLogout";
//styles
import styles from "./Navbar.module.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { logout } = useLogout();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>OliveBank</li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
