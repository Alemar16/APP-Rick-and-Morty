import React from "react";
import styles from "./Error404.module.css";

function Error404() {
  return (
    <div className={styles["container"]}>
    <div className={styles["card"]}>
      <h1 className={styles["card-title"]}>Error 404: Página no encontrada</h1>
      <p className={styles["card-text"]}>
        Lo siento, la página que busca no existe.
      </p>
      <button
        className={styles["card-button"]}
        onClick={() => (window.location.href = "*")}
      >
        Volver a la página principal
      </button>
      </div>
    </div>
  );
}

export default Error404;
