/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */

import React from "react";
import "./Contact.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import emailjs from "emailjs-com";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_czx8tat",
        "template_xsb4k67",
        e.target,
        "user_e9wn9aUAAgl0IQ4Zg0GdM",
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje enviado correctamente");
        },
        (error) => {
          console.log(error.text);
          alert("Hubo un error al enviar el mensaje");
        },
      );
    e.target.reset();
  }

  return (
    <div>
      <section className="size-section">
        <div className="container size-cont">
          <h1>Empieza un Proyecto</h1>
          <h3>¿Estas interesado en que trabajemos juntos?</h3>
          <h3>¡Contactame!</h3>
        </div>
      </section>
      <section>
        <div className="container from-design">
          <form onSubmit={sendEmail}>
            <div>
              <label htmlFor="Nombre">Nombre</label>
              <input
                required
                type="text"
                name="Nombre"
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="Email">Email</label>
              <input
                required
                type="email"
                name="Email"
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="Asunto">Asunto</label>
              <input
                required
                type="text"
                name="Asunto"
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="Mensaje">Mensaje</label>
              <textarea
                required
                name="Mensaje"
                rows="6"
                cols="50"
                className="form-control"
              />
            </div>
            <div className="centrar-btn">
              <input
                type="submit"
                name="submit"
                value="Enviar"
                className="boton-submit"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
