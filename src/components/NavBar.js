import React, { Component } from "react";
import logo from "../images/logo.png";

export default class App extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              <img src={logo} />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="badges.html">TEAM</a>
              </li>
              <li>
                <a href="collapsible.html">TESTIMONIALS</a>
              </li>
              <li>
                <a href="collapsible.html">CREDITS</a>
              </li>
              <li>
                <a href="collapsible.html">INOCULATE</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
