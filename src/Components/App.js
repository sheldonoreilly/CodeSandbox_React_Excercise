import React, { Component, Fragment } from "react";

import { Header, Footer } from "../Components/Layouts/";
import Excercies from "../Components/Excercises/";
import { muscles, excercies } from "../store";

/* functional compoents are 'functional' they allow user
to preform 'functions on them'
/* class componants are 'containers' that hold the state?? */
/* App class is a container - handles state - it passes
excercises as props to functional/presentational components 
for viewing and user perfomr functios on them */
export default class App extends Component {
  ///muscles are static so ...

  //excercies may change so the are state
  states = { excercies };

  render() {
    return (
      <Fragment>
        <Header />
        <Excercies />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}
