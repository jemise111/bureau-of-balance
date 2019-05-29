import React, { Component } from "react";
import { initModals } from "../utils/init";
import logo from "../images/logo.png";

export default class NavBar extends Component {
  state = { highlightInoculate: false };

  componentDidUpdate(prevProps) {
    if (this.props.highlightInoculate && !prevProps.highlightInoculate) {
      this.setState({ highlightInoculate: true }, () => {
        setTimeout(() => {
          this.setState({ highlightInoculate: false });
        }, 750);
      });
    }
  }

  componentDidMount() {
    initModals();
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a data-scroll href="#home" className="scroller brand-logo">
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
                <a className="scroller" data-scroll href="#team">
                  TEAM
                </a>
              </li>
              <li>
                <a className="scroller" data-scroll href="#testimonials">
                  TESTIMONIALS
                </a>
              </li>
              <li>
                <a className="scroller" data-scroll href="#credits">
                  CREDITS
                </a>
              </li>
              <li className={this.state.highlightInoculate ? "highlight" : ""}>
                <a className="modal-trigger" href="#modal1">
                  INOCULATE
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
