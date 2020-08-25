import React from 'react'
import Nav from './Components/Nav/Nav'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Team from './Components/Team/Team'
import Portfolio from './Components/Portfolio/Portfolio'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Portfolio />
      <Team />
    </div>
   
  );
}

export default App;
