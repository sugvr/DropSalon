import React from 'react';
import './nav.css'



function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#inicio">Drop Salon</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#inicio">Inicio <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Acerca de nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">Equipo de trabajo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contactanos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#dates">Saca cita</a>
            </li>

          </ul>

        </div>
      </nav>
    </>
  );

}

export default Nav;