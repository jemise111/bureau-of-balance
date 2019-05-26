import React, { Component } from "react";
import voidFish from "../images/void-fish.png";

export default class VoidFishes extends Component {
  hasRevealed = false;
  componentDidUpdate(prevProps) {
    if (
      this.props.scrolledPastThresholdFish &&
      !prevProps.scrolledPastThresholdFish
    ) {
      this.hasRevealed = true;
    }
  }
  render() {
    return (
      <div ref={this.props.fishContainerRef} className="fish-container">
        <img className="mom" src={voidFish} alt="" />
        <img
          className={`baby ${
            this.props.scrolledPastThresholdFish || this.hasRevealed
              ? ""
              : "hide-for-scroll"
          }`}
          src={voidFish}
          alt=""
        />
      </div>
    );
  }
}
