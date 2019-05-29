import React, { Component } from "react";
import ichor from "../images/ichor.png";

export default class InoculateModal extends Component {
  render() {
    return (
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>Inoculate</h4>
          <img src={ichor} alt="" />
          <p>Drink the ichor to learn our secrets. There's no going back.</p>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close btn"
            onClick={this.props.onDrinkPress}
          >
            Drink
          </a>
        </div>
      </div>
    );
  }
}
