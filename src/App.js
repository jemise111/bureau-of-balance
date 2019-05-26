import React, { Component } from "react";
import DataFetch from "./components/DataFetch";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import VoidFishes from "./components/VoidFishes";
import "./scss/App.scss";

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <DataFetch />
        <NavBar />
        <div className="container-top">
          <Title />
          <VoidFishes />
        </div>
      </div>
    );
  }
}
