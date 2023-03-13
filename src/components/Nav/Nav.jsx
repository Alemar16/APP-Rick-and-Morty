import React from "react";
import Logo from "./Logo/Logo";
import styles from "./Nav.module.css";
import NavBar from "./NavBar/NavBar.jsx";
import SearchBar from "./SearchBar/SearchBar";


export default function Nav(props) {
  return (
    <div className={styles.container}>
      
      <div className={styles.leftSection}>
        <Logo />
      </div>

      <div className={styles.centerSection}>
        <NavBar />
      </div>

      <div className={styles.rightSection}>
        <div>
          <SearchBar onSearch={props.onSearch} />
        </div>
      </div>
    
    </div>
  );
}



