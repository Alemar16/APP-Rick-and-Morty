import "./App.css";
import { useState } from "react";
import Nav from "./components/Nav/Nav";
import Titulo from "./components/Titulo/Titulo";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Cards from "./components/Targetas/Cards/Cards";
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Nav/NavBar/NavBar";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";


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
    <Routes>
      <Route
        path="/home"
        element={
          <>
            <Titulo />
            {error && <ErrorMessage message={error} />}
            <Cards onCloseCard={handleCloseCard} characters={characters} />
          </>
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/detail/:detailId" element={<Detail />} />
    </Routes>
  </div>
);
}

export default App;






