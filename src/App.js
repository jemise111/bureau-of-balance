import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import VoidFishes from "./components/VoidFishes";
import Team from "./components/Team";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import TestimonialForm from "./components/TestimonialForm";
import Credits from "./components/Credits";
import InoculateModal from "./components/InoculateModal";
import { initSmoothScroll } from "./utils/init";
import "./scss/App.scss";

export default class App extends Component {
  isSubmittingForm = false;
  textTopRef = React.createRef();
  fishContainerRef = React.createRef();
  formRef = React.createRef();
  state = {
    employees: null,
    highlightInoculate: false,
    inoculated: false,
    testimonials: null,
    scrolledPastThresholdNavBar: false,
    scrolledPastThresholdFish: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    initSmoothScroll();

    const firebaseConfig = {
      apiKey: "AIzaSyDA4w24xMPvpMrNXBgBmbeep60T56JG6E0",
      authDomain: "bureau-of-balance.firebaseapp.com",
      databaseURL: "https://bureau-of-balance.firebaseio.com",
      projectId: "bureau-of-balance",
      storageBucket: "bureau-of-balance.appspot.com",
      messagingSenderId: "942696032069",
      appId: "1:942696032069:web:32ceddd0b1101663"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    this.fetchTeam();
    this.fetchTestimonials();
  }

  fetchTeam() {
    firebase
      .firestore()
      .collection("employees")
      .get()
      .then(snapshot => {
        const employees = snapshot.docs.map(doc => doc.data());
        this.setState({ employees });
      });
  }

  fetchTestimonials() {
    firebase
      .firestore()
      .collection("testimonials")
      .orderBy("createdAt")
      .get()
      .then(snapshot => {
        const testimonials = snapshot.docs.map(doc => doc.data());
        this.setState({ testimonials: testimonials });
      });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  onSubmitForm = data => {
    if (!this.isSubmittingForm) {
      this.isSubmittingForm = true;
      const { name, class: dClass, experience: text } = data;
      const collectionRef = firebase.firestore().collection("testimonials");
      const newDoc = collectionRef.doc();
      const newData = {
        id: newDoc.id,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        name: name,
        class: dClass,
        text
      };
      newDoc
        .set(newData)
        .then(() => {
          this.formRef.current.flashSuccess();
          this.isSubmittingForm = false;
        })
        .catch(e => {
          this.isSubmittingForm = false;
        });
    }
  };

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

    const threshold = window.innerHeight / 2;
    if (fishOffset < threshold && !this.state.scrolledPastThresholdFish) {
      this.setState({ scrolledPastThresholdFish: true });
    }
  };

  onDrinkPress = () => {
    this.setState({ inoculated: true });
  };

  onScramblePress = () => {
    this.setState({ highlightInoculate: true });
  };

  render() {
    return (
      <div className="App">
        <NavBar
          highlightInoculate={this.state.highlightInoculate}
          scrolledPastThresholdNavBar={this.state.scrolledPastThresholdNavBar}
        />
        <div id="home" className="container-top">
          <Title textTopRef={this.textTopRef} />
          <VoidFishes
            scrolledPastThresholdFish={this.state.scrolledPastThresholdFish}
            fishContainerRef={this.fishContainerRef}
          />
          <Services
            scramble={!this.state.inoculated}
            onScramblePress={this.onScramblePress}
          />
          <Team
            data={this.state.employees}
            scramble={!this.state.inoculated}
            onScramblePress={this.onScramblePress}
          />
        </div>
        <div className="container-bottom">
          <Testimonials
            data={this.state.testimonials}
            scramble={!this.state.inoculated}
            onScramblePress={this.onScramblePress}
          />
          <TestimonialForm ref={this.formRef} onSubmit={this.onSubmitForm} />
        </div>
        <div className="container-credits">
          <Credits />
        </div>
        <InoculateModal onDrinkPress={this.onDrinkPress} />
      </div>
    );
  }
}
