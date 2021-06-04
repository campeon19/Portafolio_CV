/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */

import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Works from "./Works/Works";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/Works">
            <Works />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
