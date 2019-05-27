import React, { Component } from "react";
import DataFetch from "./components/DataFetch";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import VoidFishes from "./components/VoidFishes";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import TestimonialForm from "./components/TestimonialForm";
import "./scss/App.scss";

export default class App extends Component {
  textTopRef = React.createRef();
  fishContainerRef = React.createRef();
  state = {
    scrolledPastThresholdNavBar: false,
    scrolledPastThresholdFish: false
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    const textOffset = Math.max(
      0,
      this.textTopRef.current.offsetTop - window.scrollY
    );

    const fishOffset = Math.max(
      0,
      this.fishContainerRef.current.offsetTop - window.scrollY
    );

    if (textOffset > 0 && this.state.scrolledPastThresholdNavBar) {
      this.setState({ scrolledPastThresholdNavBar: false });
    } else if (textOffset <= 0 && !this.state.scrolledPastThresholdNavBar) {
      this.setState({ scrolledPastThresholdNavBar: true });
    }

    // FIXME: Fix this 300 number
    if (fishOffset < 300 && !this.state.scrolledPastThresholdFish) {
      this.setState({ scrolledPastThresholdFish: true });
    }
  };

  render() {
    return (
      <div className="App">
        <DataFetch />
        <NavBar
          scrolledPastThresholdNavBar={this.state.scrolledPastThresholdNavBar}
        />
        <div className="container-top">
          <Title textTopRef={this.textTopRef} />
          <VoidFishes
            scrolledPastThresholdFish={this.state.scrolledPastThresholdFish}
            fishContainerRef={this.fishContainerRef}
          />
          <Team />
        </div>
        <div className="container-bottom">
          <Testimonials />
          <TestimonialForm />
        </div>
      </div>
    );
  }
}
