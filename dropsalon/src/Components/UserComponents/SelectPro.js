import React, { useState, useEffect } from 'react';
import './SelectPro.css'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

const URL = 'http://localhost:4000/services'
const URL2 = 'http://localhost:4000/user/role/employee'

const SelectPage = () => {
  const [services, setService] = useState([]) //const for the select in employee and service
  const [name, setName] = useState([])

  //for the post in axios 
  const [employee_name, setEmployeeame] = useState('')
  const [date_rsvp, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [comments, setComments] = useState('')
  const [serviceType, setServiceType] = useState('')

  const jwt = sessionStorage.getItem('jwt') //for the load name and lastname for the input in client name
  const jwtPayload = JSON.parse(window.atob(sessionStorage.getItem('jwt').split('.')[1]))

  const [name2, setName2] = useState('')
  const [last_name, setLastName] = useState('')

  //load the name and last name for the client
  useEffect(() => {
      if (jwt === '' || jwt === null) {
          window.location.href = '/'
      } else if (jwtPayload.role !== 3) {
          sessionStorage.removeItem('jwt')
          window.location.href = '/'
      } else {
          //Send token to verify
          axios.post('http://localhost:4000/verify', { jwt: jwt })
              .catch(function (reason) {
                  console.log(reason)
                  sessionStorage.removeItem('jwt')
                  window.location.href = '/'
              })
          setName2(jwtPayload.name)
          setLastName(jwtPayload.last_name)
          console.log('JWT available')
          console.log(jwtPayload)
          console.log(jwtPayload.name)
          console.log(jwtPayload.last_name)
      }
  }, )

  //handle the post 
  function handleChangeEmployeename(e) {
    setEmployeeame(e.target.value)
  }

  function handleChangeDate(e) {
    setDate(e.target.value)
  }
  function handleChangeHour(e) {
    setHour(e.target.value)
  }

  function handleChangeComments(e) {
    setComments(e.target.value)
  }
  function handleChangeServiceType(e) {
    setServiceType(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      user_name: name2 + " " + last_name,
      employee_name: employee_name,
      date_rsvp: date_rsvp,
      hour: hour,
      comments: comments,
      serviceType: serviceType

    };

    axios({ //do the request to post 
      method: "post",
      url: "http://localhost:4000/citas",
      data,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (res) {
      //If the response is 2xx the set cookie and redirect
      sessionStorage.setItem('jwt', res.data.jwt)
      console.log(res)
      alert(res.data)
    }).catch(function (err) {
      //Set msg to user from the following response 
      if (err) {
        console.log(err)
        alert(err)
      }
    })
  }

  //load the name and service name
  useEffect(() => {
    getData()
  }, [])
  useEffect(() => {
    getData2()
  }, [])

  const getData = async () => { //read the axios /services
    const response = await axios.get(URL, { headers: { Authorization: "jwt " + sessionStorage.getItem("jwt") } })
    setService(response.data)
  }
  const getData2 = async () => { //read the axios /users/employee
    const response = await axios.get(URL2, { headers: { Authorization: "jwt " + sessionStorage.getItem("jwt") } })
    setName(response.data)
  }

  const renderBody = () => {
    return services.map(({ service_name }) => {
      return (
        <option>{service_name}</option>
      )
    })
  }
  const renderBody2 = () => {
    return name.map(({ name }) => {
      return (
        <option>{name} </option>
      )
    })
  }

  return (
    <div className="SelectContainer" >
      <form onSubmit={handleSubmit}>
        {/* <div className="SelectView2" >
          <label>
      <input className="inputemail" name="user_name" type="name" onChange={handleChangeUsername} />
          </label>
        </div> */}

        <div className="SelectView2" >
          <h3>Selecciona el trabajo: </h3>
          <select name="ServiceType" className="browser-default custom-select" onChange={handleChangeServiceType}>
            <option>Choose your option</option>
            {renderBody()}
          </select>
        </div>

        <div className="SelectView2" >
          <h3>Selecciona el empleado: </h3>
          <select name="employee-name" className="browser-default custom-select" onChange={handleChangeEmployeename}>
            <option>Choose your option</option>
            {renderBody2()}
          </select>
        </div>

        <div className="SelectView2" >
          <label> Comentarios
      <input  className="inputemail" name="comments" type="text" placeholder="Comentarios" onChange={handleChangeComments} />
          </label>
        </div>

        <div className="SelectView2" >
          <label> Seleccione la fecha
      <input  className="inputemail" name="date_rsvp" type="date" onChange={handleChangeDate} />
          </label>
        </div>

        <div className="SelectView2" >
          <TextField
          onChange={handleChangeHour}
            id="time"
            label="Hora"
            type="time"
            defaultValue=" "
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

      </form>


    </div>

  );
}


export default SelectPage;