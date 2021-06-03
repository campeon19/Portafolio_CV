import React, { useSate } from 'react';
import './Footer.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Icono from '../../Assets/Icono3.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faGithub, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faCopyright} from '@fortawesome/free-regular-svg-icons';
function Footer(){
    return(
        <footer className='fondo espaciado'>
            <div className='container'>
                <img src={Icono} className='img-fluid size-icon'></img>
                <h3></h3>
                <ul>
                    <li>
                        <a href='#'><FontAwesomeIcon className='tam-icono' icon={faFacebook}/></a>
                    </li>
                    <li>
                        <a href='#'><FontAwesomeIcon className='tam-icono' icon={faInstagram}/></a>
                    </li>
                    <li>
                        <a href='#'><FontAwesomeIcon className='tam-icono' icon={faTwitter}/></a>
                    </li>
                    <li>
                        <a href='#'><FontAwesomeIcon className='tam-icono' icon={faLinkedin}/></a>
                    </li>
                    <li>
                        <a href='#'><FontAwesomeIcon className='tam-icono' icon={faGithub}/></a>
                    </li>
                </ul>

                <p className='text-color'>Todos los derechos reservados <FontAwesomeIcon icon={faCopyright}/></p>
            </div>
        </footer>
    )
}

export default Footer;