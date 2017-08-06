import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import config from "./config.json";
import "whatwg-fetch";

const api = `${config.development.SERVER_URL}/api`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TestObjects: []
    };
  }
  componentWillMount() {
    fetch(api + "/test").then(response => {
      response.json().then(data => {
        this.setState({ TestObjects: data });
      });
    });
  }
  render() {
    console.log(api);
    console.log(this.state);
    let texts = this.state.TestObjects.map(obj => {
      return (
        <li key={obj._id}>
          {obj.text}
        </li>
      );
    });
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {process.env.SERVER_URL}
        </p>
        <ul>
          {texts}
        </ul>
      </div>
    );
  }
}

export default App;
