import React from "react";
import pokemon from "../models/pokemon";

const myStyle = {
  color: "#000000",
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

class Show extends React.Component {
  fixImageLink = (link) => {
    return `${link}.jpg`;
  };

  render() {
    const { pokemonID } = this.props;
    const poke = pokemon[pokemonID];
    const makeJPG = this.fixImageLink(poke.img);

    return (
      <div style={myStyle}>
        <h1>Gotta Catch 'Em All!</h1>
        <h2>{capitalizeFirstLetter(poke.name)}</h2>
        <img src={makeJPG} alt={poke.name} />
        <button>
          <a href="/pokemon">Go back</a>
        </button>
      </div>
    );
  }
}

export default Show;
