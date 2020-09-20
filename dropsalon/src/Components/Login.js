import React from "react";
import './Login.css'
import axios from 'axios'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {valueEmail: '', valuePassword: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:4000/login',
      data: {
        email: this.state.valueEmail,
        password:this.state.valuePassword
      }
    })

    
  }
render(){
  return (
    <div >
      <h1>Entra a tu cuenta</h1>
      <form className="flex" onSubmit={this.handleSubmit}>
        <div className="cajon1">
          <label>
            Email
          <input name="valueEmail" type="email" placeholder="Email" onChange={this.handleChange}/>
          </label>
        </div>
        <div className="cajon2">
          <label>
            Password
          <input name="valuePassword" type="password" placeholder="Password" onChange={this.handleChange}/>
          </label>
        </div>
        <div className="cajon3">
          <button type="submit">Entra</button>
        </div>
      </form>
    </div>
  );
};

}

export default Login;