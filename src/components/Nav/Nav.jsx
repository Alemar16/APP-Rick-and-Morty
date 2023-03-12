import React from "react";
import styles from "./Nav.module.css";
import SearchBar from "./SearchBar/SearchBar";

export default function Nav(props) {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
       {/*  <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" />
        </div> */}
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Tarjetas</a>
          </li>
          <li>
            <a href="#">Acerca de</a>
          </li>
          <li>
            <a href="#">Favoritos</a>
          </li>
        </ul>
      </div>
      <div className={styles.rightSection}>
        <div>
          <SearchBar onSearch={props.onSearch} />
        </div>
      </div>
    </div>
  );
}

  /* <div>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div> */

