import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <NavLink
          className={styles.item}
          activeClassName={styles.active}
          to="/profile"
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          className={styles.item}
          activeClassName={styles.active}
          to="/messages"
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          className={styles.item}
          activeClassName={styles.active}
          to="/users"
        >
          Users
        </NavLink>
      </div>
      <div>
        <NavLink
          className={styles.item}
          activeClassName={styles.active}
          to="/news"
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          className={styles.item}
          activeClassName={styles.active}
          to="/music"
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          className={styles.item}
          activeClassName={styles.active}
          to="/settings"
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
