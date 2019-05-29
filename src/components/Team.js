import React, { Component } from "react";
import Slider from "react-slick";
import { scramble } from "../utils/text";
import ipre from "../images/ipre.png";

export default class Team extends Component {
  renderCard = data => {
    const { id, name, title, imgUrl, text, isIpre, wikiUrl } = data;
    return (
      <div key={id} className="card-container white-text">
        <div className="bob-card">
          <p className="title">{title}</p>
          {isIpre && <img className="ipre" src={ipre} alt="" />}
          <img className="avatar" src={imgUrl} alt="" />
          <h4 className="name">{name}</h4>
          <p className="text center">
            {this.props.scramble
              ? scramble(text, this.props.onScramblePress)
              : text}
          </p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={wikiUrl}
            className="waves-effect waves-light btn"
          >
            Learn More
          </a>
        </div>
      </div>
    );
  };

  render() {
    const settings = {
      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1
          }
        }
      ]
    };

    const data = this.props.data || [];

    return (
      <section id="team" className="container team-container">
        <h3 className="section-title white-text center">Meet Our Team</h3>
        <Slider {...settings}>{data.map(this.renderCard)}</Slider>
      </section>
    );
  }
}
