import React, { useState } from "react"
import './Login.css'
import axios from 'axios'

const Login = (props) => {
  const [valueEmail, setValueEmail] = useState('')
  const [valuePassword, setValuePassword] = useState('')

  function handleChangeEmail(e) {
      setValueEmail(e.target.value)
  }

  function handleChangePassword(e) {
    setValuePassword(e.target.value)
}

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:4000/login', {
      email: valueEmail,
      password: valuePassword
    }).then(function (response) {
      //If the response is 2xx the set cookie and redirect
      sessionStorage.setItem('jwt', response.data.jwt)
      //this.handleRedirect()
    }).catch(function (reason) {
      //Set msg to user from the following response 
      if (reason) {
        console.log(reason)
        console.log(reason.response.data.error)
      }
    })
  }

  return (
    <div style={{display: props.visible}}>
      <h1>Entra a tu cuenta</h1>
      <form className="" onSubmit={handleSubmit}>
        <div className="cajon1">
          <label>
            Email
        <input name="valueEmail" type="email" placeholder="Email" onChange={handleChangeEmail} />
          </label>
        </div>
        <div className="cajon2">
          <label>
            Password
        <input name="valuePassword" type="password" placeholder="Password" onChange={handleChangePassword} />
          </label>
        </div>
        <div className="cajon3">
          <button type="submit">Entra</button>
        </div>
      </form>
    </div>
  )
}

export default Login