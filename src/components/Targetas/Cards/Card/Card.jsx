
import React from 'react';

import styles from './Card.module.css';

export default function Card(props) {
  //   console.log(props);
  return (
    <div className={styles.card}>
      
      <button className={styles.cardButton} onClick={props.onClose}>X</button>
      <div>
        <h3>{props.id}</h3>
      </div>
      <h1>{props.status}</h1>
      <div className={styles.name}>
        <h2>{props.name}</h2>
      </div>
      
      <div className={styles.speciesYGenero}>
        <h2>Especie: {props.species}</h2>
        <h2>Genero: {props.gender}</h2>

      </div>

      <img src={props.image} alt={props.name} />
    </div>
  );
}


