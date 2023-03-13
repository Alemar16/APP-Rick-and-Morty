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
          <h1>Name: {character.name}</h1>
          <h1>Gender: {character.gender}</h1>
          <h1>Specie: {character.species}</h1>
          <h1>Status: {character.status}</h1>
          <h1>Origin: {character.origin?.name}</h1>
          <h1>Location: {character.location?.name}</h1>
        </div>
        <img src={character.image} alt="" />
      </div>
    </div>
  );
}
