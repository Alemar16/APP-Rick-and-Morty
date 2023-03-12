import React from "react";
import styles from "./ErrorMessage.module.css";

export default function ErrorMessage(props) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{props.message}</p>
    </div>
  );
}
