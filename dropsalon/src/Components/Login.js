import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import './Login.css'

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Entra tu cuenta</h1>
      <form onSubmit={handleLogin} className="flex">
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

export default withRouter(Login);