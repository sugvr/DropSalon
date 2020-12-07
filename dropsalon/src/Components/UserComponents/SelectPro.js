import React, { useState, useEffect } from 'react';
import './SelectPro.css'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

const URL = 'http://localhost:4000/services'
const URL2 = 'http://localhost:4000/user/role/employee'

const SelectPage = () => {
  const [services, setService] = useState([])
  const [name, setName] = useState([])

  useEffect(() => {
    getData()
  }, [])
  useEffect(() => {
    getData2()
  }, [])

  const getData = async () => {
    const response = await axios.get(URL, { headers: { Authorization: "jwt " + sessionStorage.getItem("jwt") } })
    setService(response.data)
  }
  const getData2 = async () => {
    const response = await axios.get(URL2, { headers: { Authorization: "jwt " + sessionStorage.getItem("jwt") } })
    setName(response.data)
  }

  const renderBody = () => {
    return services.map(({ service_name, price }) => {
      return (
        <option>{service_name}</option>
      )
    })
  }
  const renderBody2 = () => {
    return name.map(({ name, last_name }) => {
      return (
        <option>{name} </option>
      )
    })
  }

  return (
    <div className="SelectContainer">
      <div className="SelectView2" >
        <h3>Selecciona el trabajo: </h3>
        <select className="browser-default custom-select">
          <option>Choose your option</option>
          {renderBody()}
        </select>
      </div>

      <div className="SelectView2" >
        <h3>Selecciona el empleado: </h3>
        <select className="browser-default custom-select">
          <option>Choose your option</option>
          {renderBody2()}
        </select>
      </div>

      <div className="SelectView2" >
        <label> Comentarios
      <input className="inputemail" name="comments" type="text" placeholder="Comentarios" />
        </label>
      </div>

      <div className="SelectView2" >
        <label> Seleccione la fecha
      <input className="inputemail" name="date_rsvp" type="date" />
        </label>
      </div>

      <div className="SelectView2" >
        <TextField
          id="time"
          label="Hora"
          type="time"
          defaultValue="09:00"
          className="textField"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </div>

      <button className="submitCita" type="submit">Registrar cita</button>
    </div>

  );
}


export default SelectPage;