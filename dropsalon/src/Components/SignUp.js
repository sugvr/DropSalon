import React, { useState } from "react"
import './SignUp.css'
import axios from 'axios'

const SignUp = (props) => {
  const [valueName, setValueName] = useState('')
  const [valueLastName, setValueLastName] = useState('')
  const [valueEmail, setValueEmail] = useState('')
  const [valuePassword, setValuePassword] = useState('')

  function handleChangeName(e) {
    setValueName(e.target.value)
  }

  function handleChangeLastName(e) {
    setValueLastName(e.target.value)
  }

  function handleChangeEmail(e) {
    setValueEmail(e.target.value)
  }

  function handleChangePassword(e) {
    setValuePassword(e.target.value)
  }

  function handleSubmit(e) {
    alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:4000/signup',
      data: {
        name: valueName,
        last_name: valueLastName,
        email: valueEmail,
        password: valuePassword
      }
    })
  }

  return (
    <div style={{ display: props.visible }}>
      <h1 className="signup-title">Registrate</h1>
      <form className="SingUp-containt" onSubmit={handleSubmit}>
        <div>
          <label>
            Nombre
        <input  className= "inputemail" name="valueName" type="name" placeholder="Nombre" onChange={handleChangeName} />
          </label>
        </div>

        <div>
          <label >
            Apellido
        <input  className= "inputemail" name="valueLastname" type="Lastname" placeholder="Apellido" onChange={handleChangeLastName} />
          </label>
        </div>

        <div>
          <label >
            Email
        <input  className= "inputemail" className= "inputemail" name="valueEmail" type="Email" placeholder="Email" onChange={handleChangeEmail} />
          </label>
        </div>

        <div>
          <label >
            Password
        <input  className= "inputemail"name="valuePassword" type="Password" placeholder="Password" onChange={handleChangePassword} />
          </label>
        </div>

        <div>
          <button className="submit-signup" type="submit">Registrarte</button>
        </div>

      </form>
    </div>
  )
}

export default SignUp