import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      astronauts: []
    };
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          astronauts: data.people
        });
      });
  }

  render() {
    return <div>{this.state.astronauts}</div>;
  }
}

export default App;
