import React from "react";
// import pokemon from "../models/pokemon";

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

const capitalizeFirstLetter = (str) => {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return "";
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={myStyle}>
        <h1>Take a look at all the Pokemon!</h1>
        <ul>
          {pokemon.map((singlePokemon, i) => {
            const capitalizedPokemonName = capitalizeFirstLetter(singlePokemon.name);
            return (
              <li key={i}>
                <a href={`/pokemon/${singlePokemon._id}`}>{capitalizedPokemonName}
               
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
