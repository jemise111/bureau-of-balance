import React from "react";
import { scramble } from "../utils/text";
import seek from "../images/seek.png";
import regulate from "../images/regulate.png";
import reclaim from "../images/reclaim.png";

const data = [
  {
    name: "Seek",
    src: seek,
    text:
      "Have you heard of the grand relics? Of course not. But our seekers sure have. They'll hunt down and find these magical artifacts."
  },
  {
    name: "Regulate",
    src: regulate,
    text:
      "See someone acting funny? Maybe burning down a city or altering reality? Let us know! Our regulators will put a stop to the madness."
  },
  {
    name: "Reclaim",
    src: reclaim,
    text:
      "Think you can resist the thrall of the relics? Well you can't. But our reclaimers can! They'll handle capture, transport, and disposal."
  }
];

export default props => (
  <section id="services" className="container services-container white-text">
    <h3 className="section-title center">Our Services</h3>
    <div className="units-container">
      {data.map(d => (
        <div className="unit" key={d.name}>
          <div className="image-container">
            <img className={d.name} src={d.src} alt="" />
          </div>
          <h4>{d.name}</h4>
          <p>
            {props.scramble ? scramble(d.text, props.onScramblePress) : d.text}
          </p>
        </div>
      ))}
    </div>
  </section>
);
