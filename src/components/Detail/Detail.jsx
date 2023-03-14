import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

export default function Detail(props) {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Ups! Algo estuvo mal");
      });
  }, [detailId]);

  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <div>
          <h1>
            <span className={styles.texto}>Name:</span> <span className={styles.text2}>{character.name}</span> 
          </h1>
          <h1>
            <span className={styles.texto}>Gender:</span> {character.gender}
          </h1>
          <h1>
            <span className={styles.texto}>Specie:</span> {character.species}
          </h1>
          <h1>
            <span className={styles.texto}>Status:</span> {character.status}
          </h1>
          <h1>
            <span className={styles.texto}>Origin:</span> {character.origin?.name}
          </h1>
          <h1>
            <span className={styles.texto}>Location:</span> {character.location?.name}
          </h1>
        </div>
        <img src={character.image} alt="" />
      </div>
    </div>
  );
}
