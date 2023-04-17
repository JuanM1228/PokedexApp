import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { pokemonSelected } from "../features/pokemon/pokemonSlice";
import { TbBrandNpm, TbPokeball } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { Loading } from "./Loading";
import "../StyleSheets/PokemonCardName.css";
import { typeColors } from "../features/pokemon/pokemonColors";

export const PokemonCardName = ({ name, url }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const { id, name, stats, types, height, weight, sprites } = data;
        setData({ id, name, stats, types, height, weight, sprites });
      });
  }, []);

  const handleOnClick = () => {
    dispatch(pokemonSelected(Data));
    localStorage.setItem("Data", JSON.stringify(Data));
    navigate(`/${name}/pokemonData`);
  };

  const loading = (Data) => {
    return Data ? (
      <img
        src={Data ? Data.sprites.other.dream_world.front_default : ""}
        width="100px"
        height="100px"
      />
    ) : (
      <Loading />
    );
  };

  const shortData = () => {
    return Data ? (
      <div className="pokemon-card-row-type">
        {Data.types.map((type) => (
          <h3
            key={Data.name + type.type.name}
            style={{ background: typeColors[type.type.name] }}
          >
            {type.type.name}
          </h3>
        ))}
        <h3 style={{ background: "gray" }}>{Data.weight / 10} kg</h3>
      </div>
    ) : (
      ""
    );
  };

  return (
    <div className="pokemon-card">
      <div className="pokemon-item" onClick={handleOnClick}>
        <TbPokeball size="45px" className="pokeball" />
        <p>{name}</p>
        {loading(Data)}
      </div>
      {shortData(Data)}
    </div>
  );
};
