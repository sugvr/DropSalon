import React from 'react'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'
import About from '../About/About'
import Team from '../Team/Team'
import Portfolio from '../Portfolio/Portfolio'
import Contact from "../Contact/Contact"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Portfolio />
      <Team />
      <Contact />
    </div>

  );
}

export default App;
