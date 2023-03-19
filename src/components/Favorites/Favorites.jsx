import React from "react"
import { useSelector } from "react-redux";
import Card from "../Targetas/Cards/Card/Card";
import styles from "./Favorites.module.css"



const Favorites = () => {

  const favorites = useSelector((state) => state.myFavorites)

  return (
    <div className={styles.background}>
      <h1>Mis Favoritos</h1>
      <div className={styles.container}>
        {favorites.map((fav) => (
          <Card key={fav.id} {...fav} isFavorite={true} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;



