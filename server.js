require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const Pokemon = require("./models/pokemon");

const db = mongoose.connection;
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

//Connection Error/Success
db.on("error", (err) => console.log(err.message + " is mongodb not running"));

db.on("open", () => console.log("mongo connected "));

db.on("close", () => console.log("mongo disconnected"));

// setTimeout(() => {
//   db.close();
// }, 5000);

app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

//Index
app.get("/pokemon", (req, res) => {
  Pokemon.find({}, (err, pokemon) => {
    if (err) {
      console.log(err);
    } else {
      res.render("./Index", { pokemon: pokemon });
    }
  });
});

//New Page
app.get("/pokemon/new", (req, res) => {
  res.render("./New");
});

app.post("/pokemon", (req, res) => {
  const { name, img } = req.body;
  const newPokemon = new Pokemon({ name, img });
  
  newPokemon.save((err, savedPokemon) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/pokemon");
    }
  });
  

  //Create Route to MongoDB

  app.post("/pokemon", (req, res) => {
    Pokemon.create(req.body, (err, createdPokemon) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/pokemon");
      }
    });
  });

  //Show Route to MongoDB

  app.get("/pokemon/:id", (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
      if (err) {
        console.log(err);
      } else {
        res.render("./Show", { pokemon: foundPokemon });
      }
    });
  });

  //Listener
  app.listen(port, () => {
    console.log(`Listening at ${port}`);
  });
});

