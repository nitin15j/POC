import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";

/* Entry point of application, using router to navigate to differnt view*/

export default class App extends Component {
  render() {
    return <Routes />;
  }
}
