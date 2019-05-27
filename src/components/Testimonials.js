import React, { Component } from "react";
import quoteImg from "../images/quotation-mark.png";

const Card = props => (
  <div className="testimonial-card white-text">
    <img src={quoteImg} alt="" />
    <p className="text">{props.text}</p>
    <p className="author text-bold">
      {props.name} ({props.role})
    </p>
  </div>
);

export default class Testimonials extends Component {
  render() {
    const firstLength = Math.round(data.length / 2);
    const first = data.slice(0, firstLength);
    const second = data.slice(firstLength);
    const formattedData = [first, second];
    return (
      <section className="container testimonials-container">
        <h3 className="section-title white-text center">Testimonials</h3>
        <div className="testimonial-card-container">
          {formattedData.map((col, i) => (
            <div className="column" key={i}>
              {formattedData[i].map(d => (
                <Card key={d.id} {...d} />
              ))}
            </div>
          ))}
        </div>
      </section>
    );
  }
}

const data = [
  {
    id: "0",
    name: "Gundrin Rockseeker",
    text:
      "alsdkf dsjlkf dmflaksdf sdlkf jasdlkf asdkf asdjklf jasdlkfj asdlkfja sdlkf adsjklf jadslkf",
    role: "Reclaimer"
  },
  {
    id: "1",
    name: "Gundrin Rockseeker",
    text: "alsdkf dsjlkf dmflaksdf sdlkf",
    role: "Reclaimer"
  },
  {
    id: "2",
    name: "Gundrin Rockseeker",
    text: "alsdkf dsjlkf dmflaksdf sdlkf jasdlkf asdkf asdjklf jasdlkfj",
    role: "Reclaimer"
  },
  {
    id: "3",
    name: "Gundrin Rockseeker",
    text:
      "alsdkf dsjlkf dmflaksdf sdlkf jasdlkf asdkf asdjklf jasdlkfj jasdlkfj jasdlkfj jasdlkfjjasdlkfj jasdlkfj asdlkfja sdlkf adsjklf jadslkf",
    role: "Reclaimer"
  },
  {
    id: "4",
    name: "Gundrin Rockseeker",
    text:
      "alsdkf dsjlkf dmflaksdf sdlkf jasdlkf asdkf asdjklf jasdlkfj asdlkfja sdlkf adsjklf jadslkf alsdkf dsjlkf dmflaksdf sdlkf jasdlkf asdkf asdjklf jasdlkfj asdlkfja sdlkf adsjklf jadslkf alsdkf dsjlkf dmflaksdf sdlkf jasdlkf asdkf asdjklf jasdlkfj asdlkfja sdlkf adsjklf jadslkf",
    role: "Reclaimer"
  },
  {
    id: "5",
    name: "Gundrin Rockseeker",
    text:
      "alsdkf dsjlkf dmflaksdf sdlkf jasdlkf asdkf asdjklf jasdlkfj asdlkfja sdlkf adsjklf jadslkf",
    role: "Reclaimer"
  },
  {
    id: "6",
    name: "Gundrin Rockseeker",
    text:
      "alsdkf dsjlkf dmflaksdf sdlkf jasdlkf asdkf asdjklf jasdlkfj asdlkfja sdlkf adsjklf jadslkf",
    role: "Reclaimer"
  },
  {
    id: "7",
    name: "Gundrin Rockseeker",
    text:
      "alsdkf dsjlkf dmflaksdf sdlkf jasdlkf asdkf asdjklf jasdlkfj asdlkfja sdlkf adsjklf jadslkf",
    role: "Reclaimer"
  }
];
