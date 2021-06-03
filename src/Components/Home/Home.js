import React, { useSate } from 'react';
import './Home.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Perfil from '../../Assets/Foto_Personal.jpg';
import Compu from '../../Assets/compuHTML.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBug, faCode} from '@fortawesome/free-solid-svg-icons';
import {faDatabase} from '@fortawesome/free-solid-svg-icons';


function Home(){
    return(
        <div>
            <section>
                <div className='container size-cont'>
                    <h1>Computer Science, Web Developer, Web Designer</h1>
                    <h3>I design beautiful simple web apps, and I love what I do.</h3>
                    <div>
                        <img src={Perfil} className='img-fluid size-round'></img>
                    </div>
                    <div>
                        <img src={Compu} className='img-fluid size-compu'/>
                    </div>
                </div>
            </section>
            <section className='presentation'>
                <div className='container size-cont2'>
                    <h2>Hola, soy Christian. Es un placer conocerte</h2>
                    <p>Actualmente estoy cursando mi tercer año en la carrera de Ciencias de la Computación 
                        y TI en la Universidad del Valle de Guatemala. Soy una persona autodidacta y por esa
                        razon me gusta ponerme retos y aprender nuevas cosas. Además, soy responsable y creo
                        que todo se debe de realizar con excelencia. Creo firmemente en que todo en la vida se
                        se debe de llevar a cabo con principios.
                    </p>
                </div>
                <div className= 'container'>
                    <div className='row no-gutters'>
                        <div className='col-lg-4 izquierda'>
                            <div>
                                <FontAwesomeIcon className='size-icons' icon={faCode}/>
                                <h3>Front-end Developer</h3>
                                <p>Me gusta programar y tener el control de lo que hago.</p>
                                <h5>Lo que utilizo:</h5>
                                <h6>HTML</h6>
                                <h6>CSS</h6>
                                <h6>JavaScript</h6>
                                <h6>React</h6>
                                <h6>Webpack</h6>
                                <h6>Babel</h6>
                                <h6>Node JS</h6>
                                <h5>Dev Tools</h5>
                                <h6>VS Code</h6>
                                <h6>Github</h6>
                                <h6>Duckly</h6>
                            </div>
                        </div>
                        <div className='col-lg-4 centro'>
                            <div>
                                <FontAwesomeIcon className='size-icons' icon={faDatabase}/>
                                <h3>Back-end</h3>
                                <p>Me gusta diseñar y levantar bases de datos.</p>
                                <h5>Lo que utilizo:</h5>
                                <h6>PostgreSQL</h6>
                                <h6>SQLite</h6>
                                <h6>MongoDB</h6>
                                <h6>Firebase</h6>
                                <h5 className='titulo2'>Dev Tools</h5>
                                <h6>DBeaver</h6>
                                <h6>DataGrip</h6>
                                <h6>Robo 3T</h6>

                            </div>
                        </div>
                        <div className='col-lg-4 derecha'>
                            <div>
                                <FontAwesomeIcon className='size-icons' icon={faBug}/>
                                <h3>Software</h3>
                                <p>Me gusta resolver problemas mediante código.</p>
                                <h5>Lo que utilizo</h5>
                                <h6>Python</h6>
                                <h6>Java</h6>
                                <h6>C#</h6>
                                <h5 className='titulo3'>Dev Tools</h5>
                                <h6>VS Code</h6>
                                <h6>Thonny</h6>
                                <h6>Unity</h6>
                                
                                
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;