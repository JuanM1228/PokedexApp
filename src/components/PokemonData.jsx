import React, { useEffect, useState } from "react";
import { TbWeight, TbShield, TbStar } from "react-icons/tb";
import { RxHeight } from "react-icons/rx";
import { HiOutlineHeart, HiArrowNarrowLeft } from "react-icons/hi";
import { RiSwordLine, RiShieldFlashLine } from "react-icons/ri";
import { SiSpeedtest } from "react-icons/si";
import { useSelector } from "react-redux";
import { typeColors } from "../features/pokemon/pokemonColors";
import { useNavigate } from "react-router-dom";
import "../StyleSheets/PokemonData.css";

export const PokemonData = () => {
  const pokemonData = useSelector((state) => state.pokemon);
  const navigate = useNavigate();

  const handleOnClickReturn = () => {
    navigate("/pokemon");
  };

  const stats = () => {
    const iconsStats = [
      <HiOutlineHeart />,
      <RiSwordLine />,
      <TbShield />,
      <TbStar />,
      <RiShieldFlashLine />,
      <SiSpeedtest />,
    ];
    return pokemonData.stats.map((stat, index) => {
      if (
        stat.stat.name !== "special-defense" &&
        stat.stat.name !== "special-attack"
      ) {
        return (
          <div key={pokemonData.id + stat.stat.name} className="card-row">
            <span className="card-row-name">
              {iconsStats[index]}
              <h4>{stat.stat.name}</h4>
            </span>
            <p>{stat.base_stat}</p>
          </div>
        );
      }
    });
  };

  const types = () => {
    return (
      <div className="card-row-type">
        {pokemonData.types.map((type) => (
          <h3
            key={pokemonData.id + type.type.name}
            style={{ background: typeColors[type.type.name] }}
          >
            {type.type.name}
          </h3>
        ))}
      </div>
    );
  };

  return (
    <div className="card-pokemon">
      <HiArrowNarrowLeft
        className="button-return"
        size={40}
        onClick={handleOnClickReturn}
      />
      <img
        src={pokemonData.sprites.other.dream_world.front_default}
        width="200px"
      />
      <div className="card-info-pokemon">
        <h1>{pokemonData.pokemon}</h1>
        {types()}
        <div className="card-row">
          <span className="card-row-name">
            <RxHeight />
            <h4>Height</h4>
          </span>
          <p>{pokemonData.height / 10} m</p>
        </div>
        <div className="card-row">
          <span className="card-row-name">
            <TbWeight />
            <h4>Weight</h4>
          </span>
          <p>{pokemonData.weight / 10} kg</p>
        </div>
        {stats()}
      </div>
    </div>
  );
};
