import React from 'react';
import './nav.css'



function Nav() {
  return (
    <div className="navbar">
      <nav id="navbarColor03 "className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a href="#header-section" className="nav-logo">Drop Salon</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about-section">Acerca de nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio-section">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team-section">Equipo de trabajo</a>
            </li>
            <li className="login-separator">
              <a className="nav-link" href="#dates-section">Saca tu cita</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-section">Contactanos</a>
            </li>

         


          </ul>

        </div>
      </nav>
    </div>
  );

}

export default Nav;