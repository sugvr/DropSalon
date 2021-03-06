import React, { useState } from 'react'
import './Citas.css'
import Login from '../Login'
import SignUp from '../SignUp'

function Citas() {
  const [login, setLogin] = useState("block")
  const [signUp, setSignUp] = useState("none")
  const [buttonValue, setButtonValue] = useState("Registrate")
  let buttonIndex = false
  const buttonValue0 = "Registrate"
  const buttonValue1 = "Entrar"
  const buttonValue2 = "Registrarte"

  function toggle() {
    let temp = login
    setLogin(signUp)
    setSignUp(temp)
    buttonIndex = !buttonIndex
    if (buttonIndex) {
      setButtonValue(buttonValue1)
    } else {
      setButtonValue(buttonValue0)
    }
  }

  return (
    <div className="citas-flex">

      <Login visible={login}/>
      <SignUp visible={signUp} />
    

      <button className="toggle" onClick={toggle}>{buttonValue}</button>
  
      
    </div>
  )
}

export default Citas