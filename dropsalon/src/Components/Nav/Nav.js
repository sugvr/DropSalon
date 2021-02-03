import React from 'react';
import './nav.css'

import Drop from './../../Assets/drop.png'

function Nav() {
  return (
    <div className="main-navbar">
      <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a href="#header-section" className="nav-logo"><img src={Drop} width="100px" alt="logo"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <a className="nav-link" href="#dates-section">Saca tu cita</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-section">Acerca de Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio-section">Galeria de Trabajos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team-section">Equipo de Trabajo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-section">Contactanos</a>
            </li>
          </ul>

        </div>
      </nav>
      </header>
    </div>
  );

}

export default Nav;