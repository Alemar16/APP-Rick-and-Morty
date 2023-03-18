
import React from 'react';
import styles from './Card.module.css';
import {Link} from "react-router-dom"

export default function Card(props) {
  //   console.log(props);
  return (
    
    <div className={styles.card}>
 
      <button className={styles.cardButton} onClick={props.onCloseCard}>X</button>
      <h3>{props.id}</h3>
      <div className={styles.name}>
        <h2>{props.name}</h2>
      </div>
      
      <div className={styles.speciesYGenero}>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </div>

      <Link to={`/detail/${props.id}`}><img src={props.image} alt={props.name} /></Link>
      </div>
    
  );
}





