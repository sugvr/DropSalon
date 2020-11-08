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

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={ ({ location }) => sessionStorage.getItem('jwt') ? children : (<Redirect to={{ pathname: "/", state: { from: location }}}/>) }
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
            <HomeUser/>
          </PrivateRoute>
          {/* Employee web app */}
          <PrivateRoute path="/homeemployee">
            <HomeEmployee/>
          </PrivateRoute>
          {/* Employee web app */}
          <PrivateRoute path="/homeadmin">
            <HomeAdmin/>
          </PrivateRoute>
          {/* Default app */}
          <Route path="/">
            <Nav />
            <Header />
            <Separator id='about-section' />
            <About />
            <Separator id='portfolio-section' />
            <Portfolio />
            <Separator id='team-section' />
            <Team />
            <Separator id='dates-section' />
            <Citas/>
            <Separator id='contact-section' />
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App