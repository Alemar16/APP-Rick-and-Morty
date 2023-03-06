import React, { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [id, setId] = useState("");
  const handleChange = e => {
    const { value } = e.target;
    setId(value)
  }
  const handleAddCharacter = () => { //para borrar ID ingresado al momento de dar click en Agregar
    props.onSearch(id);
    setId("");
  };
  return (
    <div className={style.container}>
      <input type="search" name="search" id="" onChange={handleChange} value={id} />
      <button onClick={handleAddCharacter}>Agregar</button>
    </div>
  );
}


