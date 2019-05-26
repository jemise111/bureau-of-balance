import React, { Component } from "react";
import voidFish from "../images/void-fish.png";

export default class App extends Component {
  render() {
    return (
      <div className="fish-container">
        <img src={voidFish} />
      </div>
    );
  }
}
