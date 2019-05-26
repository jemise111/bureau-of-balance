import React, { Component } from "react";
import logo from "../images/logo.png";

export default class Title extends Component {
  render() {
    return (
      <div className="title-container">
        <div className="text-container white-text">
          <div className="text-top" ref={this.props.textTopRef}>
            <h1 className="title-left">Bureau</h1>
            <img src={logo} alt="" />
            <h1 className="title-right">f Balance</h1>
          </div>
          <div className="text-bottom">
            <h5>PROTECTING YOU SINCE BEFORE YOU CAN REMEMBER.</h5>
          </div>
        </div>
      </div>
    );
  }
}
