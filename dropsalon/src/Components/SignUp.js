import React from "react"
import './SignUp.css'

function SignUp(){
  return (
    <div>
      <h1>Registrate</h1>
      <form classname="SingUp-containt">
        <label className="labels">
          Nombre
          <input name="name" type="name" placeholder="Nombre" />
        </label>
        <label className="labels">
          Apellido
          <input name="Lastname" type="Lastname" placeholder="Apellido" />
        </label>
        <label className="labels">
          Email
          <input name="Email" type="Email" placeholder="Email" />
        </label>
        <label className="labels">
         Password
          <input name="Password" type="Password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
  export default SignUp;