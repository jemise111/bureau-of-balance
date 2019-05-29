import React, { Component } from "react";

export default class TestimonialForm extends Component {
  state = {
    name: "",
    class: "",
    experience: "",
    errorText: ""
  };

  handleChange = key => e => {
    this.setState({ errorText: "", [key]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.name) {
      this.setState({ errorText: "Name can't be blank" });
      return;
    }
    if (!this.state.experience) {
      this.setState({ errorText: "Testimonial can't be blank" });
      return;
    }
    this.props.onSubmit(this.state);
  };

  flashSuccess = () => {
    this.setState(
      { success: true, name: "", experience: "", class: "" },
      () => {
        setTimeout(() => {
          this.setState({ success: false });
        }, 2000);
      }
    );
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
                onChange={this.handleChange("name")}
                value={this.state.name}
              />
              <label htmlFor="name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input
                id="class"
                type="text"
                className="validate white-text"
                onChange={this.handleChange("class")}
                value={this.state.class}
              />
              <label htmlFor="class">Class</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <textarea
                id="experience"
                className="materialize-textarea white-text"
                maxLength="1000"
                onChange={this.handleChange("experience")}
                value={this.state.experience}
              />
              <label htmlFor="experience">How was your experience?</label>
            </div>
          </div>
          <p className="error-text">{this.state.errorText}</p>
          <div className="row">
            <button
              className={`btn waves-effect waves-light ${
                this.state.success ? "success" : ""
              }`}
              type="submit"
              name="action"
            >
              {this.state.success ? "SUCCESS!" : "SUBMIT"}
            </button>
          </div>
        </form>
      </section>
    );
  }
}
