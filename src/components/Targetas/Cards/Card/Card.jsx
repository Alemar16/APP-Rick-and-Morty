
import React from 'react';

import styles from './Card.module.css';

export default function Card(props) {
  //   console.log(props);
  return (
    <div className={styles.card}>
      
      <button onClick={props.onClose}>X</button>
      
      <h2>{props.name}</h2>
      
      <div className={styles.speciesYGenero}>
      
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      
      </div>

      <img src={props.image} alt={props.name} />
    </div>
  );
}
