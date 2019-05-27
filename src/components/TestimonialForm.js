import React, { Component } from "react";

export default class TestimonialForm extends Component {
  state = {
    name: "",
    experience: ""
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleExperienceChange = e => {
    this.setState({ experience: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <section className="container testimonial-form-container white-text">
        <h3 className="section-title center">Have you worked with us?</h3>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="input-field">
              <input
                id="name"
                type="text"
                className="validate white-text"
                onChange={this.handleNameChange}
              />
              <label htmlFor="name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <textarea
                id="experience"
                className="materialize-textarea white-text"
                maxLength="1000"
                onChange={this.handleExperienceChange}
              />
              <label htmlFor="experience">How was your experience?</label>
            </div>
          </div>
          <div className="row">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    );
  }
}
