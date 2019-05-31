import React from "react";
import logo from "../images/logo.png";

export default props => (
  <div className="title-container">
    <div className="text-container white-text">
      <div className="text-top" ref={props.textTopRef}>
        <h1 className="title-left">Bureau</h1>
        <div className="text-top-right-group">
          <img className="title-logo" src={logo} alt="" />
          <h1 className="title-right">f Balance</h1>
        </div>
      </div>
      <div className="text-bottom">
        <h6>
          <b>PROTECTING YOU SINCE BEFORE YOU CAN REMEMBER</b>
        </h6>
      </div>
    </div>
  </div>
);
