import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Nav from '../Nav/Nav'
import Header from '../Header/Header'
import About from '../About/About'
import Team from '../Team/Team'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import Citas from '../Citas/Citas'
import Separator from '../Separator/Separator'
import HomeUser from '../HomeUser'
import HomeEmployee from '../HomeEmployee'
import HomeAdmin from '../Admin/HomeAdmin'
import './App.css'

import logo from "../../Assets/Logo.jpg";
import facebooklogo from './../../Assets/facebook.png'
import instagramlogo from './../../Assets/instagram.png'
import AthmovilLogo from './../../Assets/Athmovil.png'

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => sessionStorage.getItem('jwt') ? children : (<Redirect to={{ pathname: "/", state: { from: location } }} />)}
    />
  )
}

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* User web app */}
          <PrivateRoute path="/homeuser">
            <HomeUser />
          </PrivateRoute>
          {/* Employee web app */}
          <PrivateRoute path="/homeemployee">
            <HomeEmployee />
          </PrivateRoute>
          {/* Employee web app */}
          <PrivateRoute path="/homeadmin/dashboard">
            <HomeAdmin />
          </PrivateRoute>
          {/* Default app */}
          <Route path="/">
            <Nav />
            <Header />
            <Separator id='dates-section' />
            <Citas />
            <Separator id='about-section' />
            <About />
            <Separator id='portfolio-section' />
            <Portfolio />
            <Separator id='team-section' />
            <Team />
            <Separator id='contact-section' />
            <Contact />
            <Separator />

      
<footer className="footer">
  <div className="footer-container">
    <div>
      <a href="#"><img src={logo} width="200px" alt="Logo Dropsalon"></img></a>
      <h1 className="sloganh1">Resaltando Tu Belleza</h1>
    </div>
    <div>
      <h1 className="footerh1">Enlaces</h1>
      <ul>
        <li className="nav-item">
          <a className="nav-link" href="#dates-section">Saca tu cita</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about-section">Acerca de nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#portfolio-section">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#team-section">Equipo de trabajo</a>
        </li>
      </ul>
    </div>
    <div className="box2">
      <h1 className="footerh1">Ayuda</h1>
      <ul>
        <li className="nav-item"><a className="nav-link" href="#contact-section">Contáctanos</a></li>
      </ul>
    </div>


    <div>
      <a className="nav-link" href="https://www.facebook.com/dropsalon/"><img src={facebooklogo} width="15%" alt="Facebook logo"></img></a>
      <a className="nav-link" href="https://www.instagram.com/dropsalon_/"><img src={instagramlogo} width="15%" alt="Instagramlogo"></img></a>
    </div>
    <div>
      <img src={AthmovilLogo} width="15%" alt="Ath movil logo"></img>
      <h1 className="copyh1">© Copyright 2020 DropSalon</h1>
    </div>
  </div>
   


</footer >
          </Route>
        </Switch>
      </Router>
     
    </div >
  )
}

export default App