import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { PokemonList } from "./components/PokemonList";
import { PokemonData } from "./components/PokemonData";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { pokemonSelected } from "./features/pokemon/pokemonSlice";

function App() {
  const data = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  useEffect(() => {
    let status = localStorage.getItem("Data");

    if (status) {
      status = JSON.parse(status);
      const { id, name, stats, types, height, weight, sprites } = status;
      dispatch(
        pokemonSelected({ id, name, stats, types, height, weight, sprites })
      );
    }
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pokemon" element={<PokemonList />} />
        <Route path="/:name/pokemonData" element={<PokemonData />} />
      </Routes>
    </div>
  );
}

export default App;
