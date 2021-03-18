import React from "react";
import "./About.css";
import logo from "../../Assets/Logo.jpg";
import Hair from "../../Assets/hairAbout.jpg";
function About() {
  return (
    <div>
      <h2 className="about-title1">Acerca de Nosotros</h2>
      <div className="container-about">
      <img className="logoAbout"src={logo} alt="Logo del salon" />
        <div className="about-caja1">
          <div>
            <p className="about-text">
              En Drop salon queremos resaltar tu belleza, tenemos una excelente
              ubicación y una gran variedad de servicios. Contamos con área de
              Spa, Barbería y Estilismo. Trabajamos por cita para su comodidad.
              Contamos con todas las medidas de seguridad y protocolo para el
              control de infecciones. Ubicados en Paseo Las Colonias en
              Urbanización Constancia.
            </p>
          </div>
          {/* <div>
            <img className="SideAbout" src={Hair} alt="" />
          </div> */}
        </div>
        <div>
          <ul className="list-group">
            <li className="about-list">-Trabajamos solo por cita </li>
            <li className="about-list">-Ubicación céntrica</li>
            <li className="about-list">-Profesionalismo y Experiencia</li>
          </ul>
        </div>
        <div>
          <ul className="list-group">
            <li className="about-list">-Ambiente acogedor </li>
            <li className="about-list">
              -Especialidad en Tonos Rubios y Cenizos
            </li>
            <li className="about-list">
              -Todo lo que necesitas en un solo lugar
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
