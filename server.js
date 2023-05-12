const express = require("express");
const app = express();
const port = 3000;

const pokemon = require("./models/pokemon.js");

app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", (req, res) => {
  res.render("./Index", { pokemon: pokemon });
});

app.get("/pokemon/:id", (req, res) => {
  res.render("./Show", { pokemonID: req.params.id });
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
