/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */

import React from "react";
import "./Works.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Apple from "../../Assets/Apple_HomePage.png";
import Fiesta from "../../Assets/Fiesta.png";
import Chat from "../../Assets/chat.png";
import Tienda from "../../Assets/GuaTEC.png";
import Steam from "../../Assets/Steam.png";
import Clinica from "../../Assets/Odontologia.png";

function Works() {
  return (
    <div>
      <section className="size-section">
        <div className="container espacio-nav">
          <h1>Trabajos Recientes</h1>
          <h3>Aqui hay algunos proyectos recientes que he realizado</h3>
        </div>
      </section>
      <section className="proyecto1 dark">
        <div className="container trabajo1">
          <h3>Replica de la pagina principal de Apple</h3>
          <p>
            Para un proyecto en la Universidad realice una copia lo mas exacta
            posible, utilizando react. Visita la pagina haciendo click en la
            siguiente imagen.
          </p>
          <div>
            <a href="http://stw-uvg.site:3166/">
              <img className="img-fluid apple1" src={Apple} alt="" />
            </a>
          </div>
        </div>
      </section>
      <section className="proyecto2">
        <div className="container trabajo2">
          <h3>Un blog con una historia</h3>
          <p>
            Despues de haber escrito una pequeña historia sobre un cumpleaños
            que acaba mal desde diferentes perspectivas, realice un tipo blog
            sencillo para narrar esta historia, utilizando HTML, CSS, Vanilla
            JS, Webpack y Babel. Puedes leer la historia haciendo click en la
            siguiente imagen.
          </p>
          <div>
            <a href="http://stw-uvg.site/labs/lab07/Perez19710/dist/index.html">
              <img className="img-fluid apple1" src={Fiesta} alt="" />
            </a>
          </div>
        </div>
      </section>
      <section className="proyecto3 dark">
        <div className="container trabajo3">
          <h3>Un chat entre toda la clase</h3>
          <p>
            Como práctica en la Universidad, realicé un chat que esta conectado
            a un api al que tiene acceso toda la clase. El chat interpreta un
            link mostrando o una imagen/gif o un preview de la pagina web,
            dependiendo de si el link sea de una imagen o una pagina web.
          </p>
          <div>
            <img className="img-fluid chat" src={Chat} alt="" />
          </div>
        </div>
      </section>
      <section className="proyecto2">
        <div className="container trabajo2">
          <h3>El diseño de un E-Commerce para Guatemala</h3>
          <p>
            Después de ver que en Guatemala es difícil que vega la tecnología
            más reciente y en varios casos, ni llega a venir, me puse a diseñar
            una tienda en linea, haciendo un estudio minucioso del los usuarios
            objetivos , una buena paleta de colores, fuentes fáciles de leer y
            diseño fácil para los usuarios. Puedes ver mi prototipo en Webflow
            haciendo click en la siguiente imagen. (Dar click en la laptop acer
            Helios para ir a la página de producto)
          </p>
          <div>
            <a href="https://e-commerce-guatec.webflow.io/">
              <img className="img-fluid apple1" src={Tienda} alt="" />
            </a>
          </div>
        </div>
      </section>
      <section className="proyecto3 dark">
        <div className="container trabajo3">
          <h3>Steam para mamás gamer</h3>
          <p>
            Según un estudio realizado, cada vez hay más mamás gamers. Sin
            embargo, al día de hoy, no existe una página especialmente para
            ellas. Como un ejercicio en una clase en la universidad, diseñe un
            prototipo con Webflow de la tienda de Steam pero pensado
            especialmente para mamás gamer. Para ver el prototipo puedes darle
            click a la siguiente imagen.
          </p>
          <div>
            <a href="https://steam-for-moms-f7b568.webflow.io/">
              <img className="img-fluid apple1" src={Steam} alt="" />
            </a>
          </div>
        </div>
      </section>
      <section className="proyecto4">
        <div className="container trabajo4">
          <h3>Digitalizando una clinica Odontológica</h3>
          <p>
            {" "}
            Actualmente estoy realizando un trabajo con un grupo para una
            clínica odontológica. Su meta es poder digitalizar todo y disminuir
            el tiempo que se le dedica a llenar fichas, inventarios, o buscar
            información de clientes. Con nosotros, esa meta se esta
            conviertiendo en realidad.
          </p>
          <div>
            <img className="img-fluid apple1" src={Clinica} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Works;
