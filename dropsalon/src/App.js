import React from 'react'
import Nav from './Nav'
import Header from './Header'
import About from './About'
import Team from './Team'
import Portfolio from './Portfolio'
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
