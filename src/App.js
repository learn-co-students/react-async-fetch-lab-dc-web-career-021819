import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div></div>
    );
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(response => response.json())
    .then(response => console.log(response.people))
  }

}

export default App;
