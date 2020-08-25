import React from 'react'
import Nav from './Nav'
import Header from './Header'
import About from './About'
import Team from './Team'
import Portfolio from './Portfolio'
import Contact from './Contact'
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
