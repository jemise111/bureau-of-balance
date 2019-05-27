import React, { Component } from "react";
import Slider from "react-slick";
import avatar from "../images/lucretia.png";

const Card = () => (
  <div className="card-container white-text">
    <div className="bob-card">
      <p className="name">Lucretia</p>
      <img src={avatar} alt="" />
      <h4 className="title">Director</h4>
      <p className="text center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum numquam
        veniam cumque! Corporis porro laboriosam rem facilis nesciunt maxime.
        Quidem voluptatem excepturi maiores eaque rem deleniti, animi totam
        nesciunt inventore.
      </p>
      <a href="something.html" className="waves-effect waves-light btn">
        Learn More
      </a>
    </div>
  </div>
);

export default class Team extends Component {
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
    return (
      <section className="container team-container">
        <h3 className="section-title white-text center">Meet Our Team</h3>
        <Slider {...settings}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      </section>
    );
  }
}
