import React from "react";
import './Login.css'

function Login() {
  return (
    <div >
      <h1>Entra a tu cuenta</h1>
      <form className="flex">
        <div className="cajon1">
          <label>
            Email
          <input name="email" type="email" placeholder="Email" />
          </label>
        </div>
        <div className="cajon2">
          <label>
            Password
          <input name="password" type="password" placeholder="Password" />
          </label>
        </div>
        <div className="cajon3">
          <button type="submit">Entra</button>
        </div>
      </form>
    </div>
  );
};



export default Login;