import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom"

const NavLinkMe = ({ to, children, ...props }) => {
  return (
    <NavLink
      {...props}
      to={to}
      className={({ isActive }) => (isActive ? styles.active : styles.disable)}
    >
      {children}
    </NavLink>
  );
};

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavLinkMe to="/home">Home</NavLinkMe>
      <NavLinkMe to="/about">About</NavLinkMe>
    </div>
  );
}

