require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const Pokemon = require("./models/pokemon");

const db = mongoose.connection;
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
 });


//Middleware
app.engine("jsx", require("jsx-view-engine").createEngine());
app.set("view engine", "jsx");
app.use(express.urlencoded({ extended: false }));
mongoose.set('strictQuery', true);
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

//Index

app.get("/pokemon", async (req, res) => {
  try {
    const allPokemon = await Pokemon.find({});
    res.render("Index", { pokemon: allPokemon });
  } catch (error) {
    console.log(error.message);
  }
});

//New Page

app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

app.post("/pokemon", (req, res) => {
  const { name, img } = req.body;
  const newPokemon = new Pokemon({ name, img });

  newPokemon.save((err) => {
    if (err) {
      console.error(err);
      res.redirect("/pokemon/new");
    } else {
      res.redirect("/pokemon");
    }
  });
});

//Create Route to MongoDB

// app.post("/pokemon", (req, res) => {
//   console.log(req.body);
//   Pokemon.create(req.body, (err, createdPokemon) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.redirect("/pokemon");
//     }
//   });
// });

//Show Route to MongoDB

app.get("/pokemon/:id", async (req, res) => {
  try {
    const foundPokemon = await Pokemon.findById(req.params.id);
    res.render("./Show", { pokemon: foundPokemon });
  } catch (err) {
    console.log(err);
  }
});

//Delete Route to MongoDB

app.delete("/pokemon/:id", (req, res) => {
  Pokemon.findByIdAndRemove(req.params.id, (err, deletedPokemon) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/pokemon");
      
    }
  });
  });

  //Listener
  app.listen(port, () => {
    console.log(`Listening at ${port}`);
  })

