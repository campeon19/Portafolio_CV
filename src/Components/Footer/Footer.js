/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */

import React from "react";
import "./Footer.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import Icono from "../../Assets/Icono3.png";

function Footer() {
  return (
    <footer className="fondo espaciado">
      <div className="container">
        <img src={Icono} className="img-fluid size-icon" alt="" />
        <ul>
          <li>
            <a href="#">
              <FontAwesomeIcon className="tam-icono" icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/christian_d54/">
              <FontAwesomeIcon className="tam-icono" icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon className="tam-icono" icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/christian-daniel-p%C3%A9rez-de-le%C3%B3n-1445a4172?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhaKX4xJoRt%2BAmfTG7Xa4qA%3D%3D">
              <FontAwesomeIcon className="tam-icono" icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://github.com/campeon19">
              <FontAwesomeIcon className="tam-icono" icon={faGithub} />
            </a>
          </li>
        </ul>

        <p className="text-color">
          Todos los derechos reservados
          <FontAwesomeIcon icon={faCopyright} />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
