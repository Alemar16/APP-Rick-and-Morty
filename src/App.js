import "./App.css";
import Cards from "./components/Targetas/Cards/Cards";
import { useState } from "react"; //destructuring
import Nav from "./components/Nav/Nav";
import Titulo from "./components/Titulo/Titulo";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";


function App() {
/*     const example = {
      name: "Rick Sanchez",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  }; */ 

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
          setError(null)
        }else {
          setError(`No existe un personaje con el ID ${characterId}`);
        }
      });
      }
    function handleCloseCard(id) {
      setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
    }


  
  return (
    <div className="App" style={{ padding: "10px" }}>
      
      <Nav onSearch={onSearch} />
      <Titulo />
      {error && <ErrorMessage message={error}/>}
      <Cards characters={characters} onCloseCard={handleCloseCard} />
    </div>
  );
}

export default App;
