import "./App.css";
import Cards from "./components/Targetas/Cards/Cards";
import { useState } from "react"; //destructuring
import Nav from "./components/Nav/Nav";
import Titulo from "./components/Titulo/Titulo";


function App() {
/*     const example = {
      name: "Rick Sanchez",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  }; */ 

  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    const characterId = parseInt(character);
    if (characters.some((char) => char.id === characterId)) {
      window.alert(`El personaje con ID ${characterId} ya está mostrado.`);
      return;
    }

    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
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
      <Cards characters={characters} onCloseCard={handleCloseCard} />
    </div>
  );
}

export default App;
