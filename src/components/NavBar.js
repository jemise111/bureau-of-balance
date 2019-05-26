import React, { Component } from "react";
import logo from "../images/logo.png";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="nothing.html" className="brand-logo">
              <img
                alt=""
                src={logo}
                className={`${
                  this.props.scrolledPastThresholdNavBar
                    ? ""
                    : "hide-for-scroll"
                }`}
              />
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
