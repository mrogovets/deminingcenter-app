import React from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import "./content.css";

import { About } from "../../pages/about.jsx";
import { Contacts } from "../../pages/contacts.jsx";
import { Cards } from "../cards/cards";
import { Slider } from "../slider/Slider";

export const Content = ({ showModal }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Slider />
        <Cards showModal={showModal} />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contacts">
        <Contacts />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
