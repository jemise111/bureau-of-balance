import { Component } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

export default class App extends Component {
  componentDidMount() {
    // Your web app's Firebase configuration
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
    firebase
      .firestore()
      .collection("testimonials")
      .limit(10)
      .onSnapshot(snapshot => {
        // console.log(snapshot.docs[0].data());
      });
  }

  render() {
    return null;
  }
}
