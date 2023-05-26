import React from "react";
import pokemon from "../models/pokemon";

const myStyle = {
  color: "#000000",
  backgroundColor: "#ffffff",
};

const capitalizeFirstLetter = (str) => {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return "";
};

class Show extends React.Component {
  fixImageLink = (link) => {
    return `${link}.jpg`;
  };

  render() {
    const { pokemon } = this.props;
    const makeJPG = this.fixImageLink(pokemon.img);

    return (
      <div style={myStyle}>
        <h1>Gotta Catch 'Em All!</h1>
        <h2>{capitalizeFirstLetter(pokemon.name)}</h2>
        <img src={makeJPG} alt={pokemon.name} />
        <button>
          <a href="/pokemon">Go back</a>
        </button>
      </div>
    );
  }
}

export default Show;

