import React, { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [id, setId] = useState("");
  const handleChange = e => {
    const { value } = e.target;
    setId(value)
  }

  return (
    <div className={style.container}>
      <input type="search" name="search" id="" onChange={handleChange} />
      <button onClick={() => props.onSearch(id)}>Agregar</button>
    </div>
  );
}


