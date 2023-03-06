import React from "react";
import styles from "../Nav/Nav.module.css";

import SearchBar from "./SearchBar/SearchBar";


export default function Nav(props) {
  return (
    //Barra de navegacion
    
    <div className={styles.container}>

      <SearchBar onSearch={props.onSearch} />

    </div>
  );
}









{/* <div>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div> */}