import React from 'react'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'
import About from '../About/About'
import Team from '../Team/Team'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import Citas from '../Citas/Citas'
import Separator from '../Separator/Separator'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Nav />
      
      <Header />
      <Separator id='about-section'/>
      
      
      <About />
      <Separator id='portfolio-section'/>
      <Portfolio />
      <Separator id='team-section'/>
      <Team />
      <Separator id='contact-section'/>
      <Contact />
      <Separator id='dates-section'/>
      <Citas />
    </div>

  );
}

export default App;
