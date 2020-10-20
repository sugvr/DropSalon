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
    // Hardcoded link BAD PRACTICE
    axios.post('http://localhost:4000/login', {
      email: valueEmail,
      password: valuePassword
    }).then(function (response) {
      //If the response is 2xx the set cookie and redirect
      sessionStorage.setItem('jwt', response.data.jwt)
      handleLogin(response.data.jwt)
    }).catch(function (reason) {
      //Set msg to user from the following response 
      if (reason) {
        console.log(reason)
        console.log(reason.response.data.error)
      }
    })
  }

  function handleLogin(jwt){
    let payload = jwt.split('.')[1]
    // Decode Base64Url
    let payloadData = JSON.parse(window.atob(payload))
    //console.log(payloadData)
    //console.log(payloadData.role)
    if (payloadData.role === 3) {
      window.location.href = '/homeuser'
    } else if (payloadData.role === 2) {
      window.location.href = '/homeemployee'
    } else if (payloadData.role === 1) {
      window.location.href = '/homeadmin'
    }
  }

  return (
    <div style={{display: props.visible}}>
      <h1>Entra a tu cuenta</h1>
      <form className="flex-login" onSubmit={handleSubmit}>
        <div className="cajon1">
          <label>
            Email
        <input className= "inputemail" name="valueEmail" type="email" placeholder="Email" onChange={handleChangeEmail} />
          </label>
        </div>
        <div className="cajon2">
          <label>
            Password
        <input className="inputemail" name="valuePassword" type="password" placeholder="Password" onChange={handleChangePassword} />
          </label>
        </div>
        <div className="cajon3">
          <button className="Submit-login" type="submit">Entrar</button>
        </div>
      </form>
    </div>
  )
} 
export default Login