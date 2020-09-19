import React from 'react'
import './About.css'
import logo from "../../Assets/Logo.jpg";

function About() {
  return (
    <div className="container">
      <div className=" box1"> <img src={logo} alt="Logo del salon" /> </div>
      <div className=" box2">
        <h2 className="about-title">Acerca de Nosotros</h2>
        <p>En Drop salon queremos resaltar tu belleza, tenemos una excelente ubicación y 
          una gran variedad de servicios. Contamos con área de Spa, Barbería y Estilismo. 
          Trabajamos por cita para su comodidad. Contamos con todas las medidas de seguridad 
          y protocolo para el control de infecciones. Ubicados en Paseo Las Colonias en Urbanización Constancia.</p>
        <br />

        <h3 className="about-title">¿Porqué nosotros?</h3>
        <div className="box3">

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
              <li className="about-list">-Especialidad en Tonos Rubios y Cenizos</li>
              <li className="about-list">-Todo lo que necesitas en un solo lugar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );

}

export default About;