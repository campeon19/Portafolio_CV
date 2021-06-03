import React, { useSate } from 'react';
import './Navbar.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Icono from '../../Assets/Icono3.png';
import { Link } from 'react-router-dom';


function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
              <Link class="navbar-brand" to='/'>
                  <img src={Icono} className='img-fluid size-img'/>
              </Link>
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <Link class="nav-link" to='/'>Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to='/Works'>Works</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to='/Contact'>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
    )
}

export default Navbar;