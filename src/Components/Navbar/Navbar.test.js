/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */

import React from 'react';
import ReactDom from 'react-dom';
import Navbar from './Navbar';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Navbar />, div);
});
