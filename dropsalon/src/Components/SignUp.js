import React from "react"
import './SignUp.css'
import axios from 'axios'

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valueName: '' , valueLastname: '', valueEmail: '', valuePassword: ''};

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
      url: 'http://localhost:4000/signup',
      data: {
        name: this.state.valueName,
        last_name: this.state.valueLastname,
        email: this.state.valueEmail,
        password:this.state.valuePassword
      }
    })
  }
  render(){
    return (
      <div>
        <h1>Registrate</h1>
        <form className="SingUp-containt" onSubmit={this.handleSubmit}>
          <label className="labels">
            Nombre
          <input name="valueName" type="name" placeholder="Nombre" onChange={this.handleChange}/>
          </label>
          <label className="labels">
            Apellido
          <input name="valueLastname" type="Lastname" placeholder="Apellido" onChange={this.handleChange}/>
          </label>
          <label className="labels">
            Email
          <input name="valueEmail" type="Email" placeholder="Email" onChange={this.handleChange}/>
          </label>
          <label className="labels">
            Password
          <input name="valuePassword" type="Password" placeholder="Password" onChange={this.handleChange}/>
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
  export default SignUp;