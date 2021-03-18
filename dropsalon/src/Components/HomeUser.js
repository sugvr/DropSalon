import React, { useState, useEffect } from "react";
import axios from "axios";
import TitleUser from "./UserComponents/TitleUser";
// import Date from './UserComponents/DatePicker'
import SelectPage from "./UserComponents/SelectPro";
import "./HomeUser.css";

function HomeUser() {
  const locale = "es";
  const today = new Date();

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
  })}\n\n`;

  const hour = today.getHours();
  const wish = ` ${
    (hour < 12 && "Buenos días") || (hour < 17 && "Buenas tardes") || "Buenas noches"
  }, `;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });



  const jwt = sessionStorage.getItem("jwt");
  const jwtPayload = JSON.parse(
    window.atob(sessionStorage.getItem("jwt").split(".")[1])
  );
  const [name, setName] = useState([]);
  const [last_name, setLastName] = useState([]);

  useEffect(() => {
    if (jwt === "" || jwt === null) {
      window.location.href = "/";
    } else if (jwtPayload.role !== 3) {
      sessionStorage.removeItem("jwt");
      window.location.href = "/";
    } else {
      //Send token to verify
      axios
        .post("http://localhost:4000/verify", { jwt: jwt })
        .catch(function (reason) {
          console.log(reason);
          sessionStorage.removeItem("jwt");
          window.location.href = "/";
        });
      setName(jwtPayload.name);
      setLastName(jwtPayload.last_name);
      console.log("JWT available");
      console.log(jwtPayload);
      console.log(jwtPayload.name);
      console.log(jwtPayload.last_name);
    }
  }, [jwt, jwtPayload]);

  return (
    <div>
      <TitleUser />
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Saca tu cita</h1>
        <div className="hello">
          <h1>
            {wish} {name} {last_name}.
          </h1>
          <p>Hoy es {date} y son las {time}</p>
        </div>
        <div class="btn-toolbar mb-2 mb-md-0"></div>
      </div>

      <SelectPage />
    </div>
  );
}

export default HomeUser;
