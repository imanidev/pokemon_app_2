const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Create a New Pokemon</h1>
        <form method="POST" action="/pokemon">
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Image URL:
            <input type="text" name="img" />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

module.exports = New;
