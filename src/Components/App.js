import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h1> TEST </h1>
        <Exercises />
        <Footer />
      </Fragment>
    );
  }
}
