import "./App.css";
import { useState } from "react";
import Nav from "./components/Nav/Nav";
import Titulo from "./components/Titulo/Titulo";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Cards from "./components/Targetas/Cards/Cards";

function App() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  function onSearch(character) {
    const characterId = parseInt(character);
    if (isNaN(characterId)) {
      setError("Por favor ingresa un valor numérico.");
      return;
    }
    if (characters.some((char) => char.id === characterId)) {
      setError(`El personaje con ID ${characterId} ya está mostrado.`);
      return;
    }

    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          setError(null);
        } else {
          setError(`No existe un personaje con el ID ${characterId}`);
        }
      });
  }

  function handleCloseCard(id) {
    setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Titulo />
      {error && <ErrorMessage message={error} />}
      <Cards characters={characters} onCloseCard={handleCloseCard} />
    </div>
  );
}

export default App;
