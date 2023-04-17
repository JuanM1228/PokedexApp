import React from "react";
import { useState, useEffect } from "react";
import { PokemonCardName } from "./PokemonCardName";
import { useSelector } from "react-redux";
import "../StyleSheets/PokemonList.css";

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const username = useSelector((state) => state.user.username);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);

  return (
    <>
      <h1 className="title-pokedex">{username + " pokedex"}</h1>
      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <div key={pokemons.indexOf(pokemon)}>
            <PokemonCardName {...pokemon} />
          </div>
        ))}
      </div>
    </>
  );
};
