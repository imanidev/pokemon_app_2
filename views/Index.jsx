import React from "react";
import pokemon from "../models/pokemon";

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

class Index extends React.Component {
  render() {
    return (
      <div style={myStyle}>
        <h1>Take a look at all the Pokemon!</h1>
        <ul>
          {pokemon.map((pokemon, i) => {
            const capitalizedPokemonName = capitalizeFirstLetter(pokemon.name);
            return (
              <li key={i}>
                <a href={`/pokemon/${i}`}>{capitalizedPokemonName}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Index;
