const React = require("react");

class New extends React.Component {
  render() {
    const { pokemon } = this.props;
    const name = pokemon ? pokemon.name : "";
    const img = pokemon ? pokemon.img : "";

    return (
      <div>
        <h1>Create a New Pokemon</h1>
        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" value={name} />
          <br />
          Img: <input type="text" name="img" value={img} />
          <br />
          <input type="submit" name="" value="Create Pokemon" />
        </form>
      </div>
    );
  }
}

module.exports = New;
