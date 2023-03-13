import React from "react";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src="/Rick_and_Morty_Logo-transformed.png" alt="Logo" />
    </div>
  );
}
