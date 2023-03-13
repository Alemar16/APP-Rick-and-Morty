import React from "react";
import styles from "./NavBar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Detalle</a>
        </li>
        <li>
          <a href="#">Acerca</a>
        </li>
      </ul>
    </div>
  );
}
