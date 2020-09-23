import React from 'react'
import './AdminNav.css'

function Nav() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a href="#header-section" className="nav-logo">Drop Salon</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#Agenda-Admin">Agenda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#AdminSignup">Portfolio</a>
              </li>
             
  
            </ul>
  
          </div>
        </nav>
      </>
    )
}

export default Nav