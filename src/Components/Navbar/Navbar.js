import React, { useSate } from 'react';
import './Navbar.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Icono from '../../Assets/Icono3.png';
import { Link } from 'react-router-dom';


function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
              <Link className="navbar-brand" to='/'>
                  <img src={Icono} className='img-fluid size-img'/>
              </Link>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to='/'>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/Works'>Works</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/Contact'>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
    )
}

export default Navbar;