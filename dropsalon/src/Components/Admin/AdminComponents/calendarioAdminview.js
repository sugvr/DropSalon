import React, { useState, useEffect } from 'react'

import axios from 'axios';
import './CalendarioAdminView.css'


//url for the axios
// const URL = 'http://localhost:4000/citas'
const URL2 = 'http://localhost:4000/user/role/employee'

const CalendarioAdminView = () => {

    const [name, setName] = useState([])//call employee name

    const [name1, setName1] = useState([])//use the employee name for the call in citas
    
    const [date, setDate] = useState([]) //using it /citas to see in front
    

    useEffect(() => { //read the axios for /citas but only where employee_name = of employee_name in /users
        getData3();
    });

    const getData3 = async  () => { //const getData called it up 
        const res = await axios.get(`http://localhost:4000/citas/${name1}`, { headers: { Authorization: "jwt " + sessionStorage.getItem("jwt") } }) //Use employee_name to call the /citas
        setDate(res.data);
    }


    useEffect(() => { //get
        getData2()
    }, [])

    const getData2 = async () => { //getData (name) for /users where role = 2
        const response = await axios.get(URL2, { headers: { Authorization: "jwt " + sessionStorage.getItem("jwt") } })
        setName(response.data)
    }

    const removeData = (id) => { //delete data in the backend
        axios.delete(`http://localhost:4000/citas/${id}`,  { headers: { Authorization: "jwt " + sessionStorage.getItem("jwt") } }).then(res => {
            const del = date.filter(date => id !== date.id)
            setDate(del)
            console.log(res)
        })
    }

    const renderHeader = () => {
        let headerElement = ['id', 'Nombre de Cliente', 'Tipo de Servicio', 'Fecha', 'Comentarios', "Nombre de empleado"]

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => { //receive the data and show in table
        return date.map(({ id, date_rsvp, comments, user_name, employee_name, serviceType }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{user_name}</td>
                    <td>{serviceType}</td>
                    <td>{date_rsvp}</td>
                    <td>{comments}</td>
                    <td>{employee_name}</td>
                    <td className='opration'>
                            <button className='button' onClick={() => removeData(id)}>Delete</button>
                        </td>
                </tr>
            )
        })
    }
    const renderBody2 = () => {
        return name.map(({ name }) => {
            return (
                <>
                    <option value={name}>{name}</option>
                </>
            )
        })
    }

    return (
        <>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Cita Por Empleado</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                </div>
            </div>
            <div className="SelectView2" >
                <h3>Selecciona el empleado: </h3>
                <select name="ServiceType" className="browser-default custom-select" value={name1} onChange={(e) => {
                    setName1(e.target.value)
                }}>
                    <option>Choose your option</option>
                    {renderBody2()}
                </select>
            </div>
            <div>
                <span><h2>Calendario de {name1}</h2></span>
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