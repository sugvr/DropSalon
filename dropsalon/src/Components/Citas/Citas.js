import React, {Component} from 'react'
import './Citas.css'
import Login from '../Login'
import SignUp from "../SignUp"

export default class Citas extends Component {
  state = {
    on: false,
  }
  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }
  render() {
    return (
      <div>
        <Login/>
        {this.state.on && (
          <SignUp/>
        )}
        <button onClick={this.toggle}>Registra tu cuenta</button>
      </div>
    )
  }
}


