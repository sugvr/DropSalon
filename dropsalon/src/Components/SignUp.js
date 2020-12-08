import React, { Component} from "react"
import './SignUp.css'
import axios from 'axios'


class SignUp extends Component {
  state = { //get 
    name: "",
   last_name: "",
   email: "",
   password:""
   
  };


  onNameChange = e => { //read the label in the html
    this.setState({
      name: e.target.value
    });
  };

  onLastNameChange = e => {
    this.setState({
      last_name: e.target.value
    });
  };
  onEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  onPasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };
  handleSubmit = e => { //read the data
    e.preventDefault();
    const data = {
     name: this.state.name,
     last_name: this.state.last_name,
     email: this.state.email,
     password:this.state.password

    };
  
    axios
      .post("http://localhost:4000/signup", data) //do the request in axios
      .then(function (res) {
      //If the response is 2xx the set cookie and redirect
      sessionStorage.setItem('jwt', res.data.jwt)
      console.log(res)
      alert(res.data)
    }).catch(function (err) {
      //Set msg to user from the following response 
      if (err) {
        console.log(err)
        alert(err)
      }
    })
  };
 

  render() {
  return (
    <div>
      <h1 className="signup-title">Registrate</h1>
      <form className="SingUp-containt" onSubmit={this.handleSubmit}>
        <div>
          <label>
            Nombre
        <input  className= "inputemail" name="valueName" type="name" placeholder="Nombre" onChange={this.onNameChange} />
          </label>
        </div>

        <div>
          <label >
            Apellido
        <input  className= "inputemail" name="valueLastname" type="Lastname" placeholder="Apellido" onChange={this.onLastNameChange} />
          </label>
        </div>

        <div>
          <label >
            Email
        <input  className= "inputemail" name="valueEmail" type="Email" placeholder="Email" onChange={this.onEmailChange} />
          </label>
        </div>

        <div>
          <label >
            Password
        <input  className= "inputemail"name="valuePassword" type="Password" placeholder="Password" onChange={this.onPasswordChange} />
          </label>
        </div>

        <div>
          <button className="submit-signup" type="submit">Registrarse</button>
        </div>

      </form>
    </div>
  )
}
}
export default SignUp