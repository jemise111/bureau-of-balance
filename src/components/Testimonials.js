import React, { useState } from "react";
import { scramble } from "../utils/text";
import quoteImg from "../images/quotation-mark.png";

const LIMIT_INCREMENT = 10;

const Card = props => (
  <div className="testimonial-card white-text">
    <img src={quoteImg} alt="" />
    <p className="text">
      {props.scramble
        ? scramble(props.text, props.onScramblePress)
        : props.text}
    </p>
    <p className="author">
      <b>
        {props.name} {props.class ? `(${props.class})` : ""}
      </b>
    </p>
  </div>
);

export default props => {
  const [limit, setLimit] = useState(LIMIT_INCREMENT);

  const onButtonClick = () => {
    setLimit(limit + LIMIT_INCREMENT);
  };

  const { data } = props;
  if (!data) {
    return null;
  }

  const col1 = [];
  const col2 = [];

  for (let i = 0; i < data.length; i++) {
    if (i < limit) {
      if (i % 2 === 0) {
        col2.push(data[i]);
      } else {
        col1.push(data[i]);
      }
    }
  }
  const formattedData = [col1, col2];

  return (
    <section id="testimonials" className="container testimonials-container">
      <h3 className="section-title white-text center">Testimonials</h3>
      <div className="testimonial-card-container">
        {formattedData.map((col, i) => (
          <div className="column" key={i}>
            {formattedData[i].map(d => (
              <Card key={d.id} {...d} {...props} />
            ))}
          </div>
        ))}
      </div>
      <button onClick={onButtonClick} className="btn waves-effect waves-light">
        LOAD MORE
      </button>
    </section>
  );
};
