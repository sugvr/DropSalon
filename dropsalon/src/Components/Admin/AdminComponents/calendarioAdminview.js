import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './CalendarioAdminView.css'

//url for the axios
const URL = 'http://localhost:4000/citas'
const URL2 = 'http://localhost:4000/user/role/employee'

const CalendarioAdminView = () => {
    const [cita, setCita] = useState([])//citas 
    const [name, setName] = useState([])//employee name

    useEffect(() => { //get
        getData()
    }, [])

    const getData = async () => { //getData for /citas
        const response = await axios.get(URL, { headers: { Authorization: "jwt " + sessionStorage.getItem("jwt") } })
        setCita(response.data)
    }
    useEffect(() => {
        getData2()
    }, [])

    const getData2 = async () => { //getData (name) for /users where role = 2
        const response = await axios.get(URL2, { headers: { Authorization: "jwt " + sessionStorage.getItem("jwt") } })
        setName(response.data)
    }

    const removeData = (id) => {

        axios.delete(`${URL}/${id}`).then(res => {
            const del = cita.filter(cita => id !== cita.id)
            setCita(del)
        })
    }

    const renderHeader = () => {
        let headerElement = ['id', 'Fecha', 'Comentarios', 'Nombre de Cliente', 'Nombre de empleado', 'Tipo de Servicio']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => { //receive the data and show in table
        return cita.map(({ id, date_rsvp, comments, user_name, employee_name, serviceType }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{date_rsvp}</td>
                    <td>{comments}</td>
                    <td>{user_name}</td>
                    <td>{employee_name}</td>
                    <td>{serviceType}</td>
                    <td className='opration'>
                        <button className='button' onClick={() => removeData(id)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }
    const renderBody2 = () => {
        return name.map(({ name, last_name }) => {
            return (
                <>
                     <option>{name} </option>
                </>
            )
        })
    }

    return (
        <>
        <h3>Empleados</h3>
        <div className="SelectView2" >
          <h3>Selecciona el empleado: </h3>
          <select name="ServiceType" className="browser-default custom-select">
            <option>Choose your option</option>
            {renderBody2()}
          </select>
        </div>
            <div>
                <h2>Calendario Empleados</h2>
                <table class="table table-striped table-sm">
                    <thead>
                        <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>

                        {renderBody()}

                    </tbody>
                </table>
            </div>
        </>
        
    )
}


export default CalendarioAdminView