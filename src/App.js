import "./App.css";
import Cards from "./components/Targetas/Cards/Cards";
import { useState } from "react"; //destructuring
import Nav from "./components/Nav/Nav";

function App() {
    const example = {
      name: "Rick Sanchez",
      species: "Human",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  }; 

  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
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

  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
