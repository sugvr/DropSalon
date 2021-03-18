import React from "react";
import { useHistory } from "react-router-dom";
import "./TitleUser.css";

import Drop from "./../../Assets/drop.png";

function TitleUser() {
  let history = useHistory();
  const handleLogout = () => {
    sessionStorage.clear();
    history.push("/");
  };
  return (
    <div className="Title-user">
      <div className="divUserTitle">
        <h1>
          <img src={Drop} width="300px" alt="logo" />
        </h1>
      </div>

      <ul className="navbar-nav px-3 mt-0">
        <li className="nav-item text-nowrap">
          <button onClick={() => handleLogout()} className="btn btn-danger">
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
}

export default TitleUser;
