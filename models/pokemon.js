const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  name: { type: String },
  img: { type: String }
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;
