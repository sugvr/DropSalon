import React from 'react';
import './nav.css'



function Nav() {
    return (
      <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#inicio">Drop Salon</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor03">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#inicio">Inicio <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about">Acerca de nosotros</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#portfolio">Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#team">Equipo de trabajo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact">Contactanos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#dates">Saca cita</a>
      </li>
      
    </ul>
  
  </div>
</nav>
      </>
    );

}

export default Nav;