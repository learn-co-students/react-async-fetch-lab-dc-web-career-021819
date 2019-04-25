// create your App component here
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class App extends Component {
  static propTypes = {
    prop: PropTypes,
  };
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json");
  }
  render() {
    return <div />;
  }
}
