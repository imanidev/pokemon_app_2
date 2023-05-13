const React = require("react");

class New extends React.Component {
  render() {
    const { pokemon } = this.props;

    return (
      <div>
        <h1>Create a New Pokemon</h1>
        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" value={pokemon.name} />
          <br />
          Img: <input type="text" name="img" value={pokemon.img} />
          <br />
        </form>
      </div>
    );
  }
}

module.exports = New;
