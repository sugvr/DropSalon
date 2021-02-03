import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './SeeReports.css'

const URL = 'http://localhost:4000/reportes'

const SeeReports = () => {
    const [report, setReport] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

        const response = await axios.get(URL)
        setReport(response.data)
    }

    const removeData = (id) => {
        axios.delete(`http://localhost:4000/reportes/${id}`, { headers: { Authorization: "jwt " + sessionStorage.getItem("jwt") } }).then(res => {
            const del = report.filter(report => id !== report.id)
            setReport(del)
            console.log(res)
        })
    }

    // const renderHeader = () => {
    //     let headerElement = ['id', 'name', 'service total semanal', 'ganancia empleado', 'ganancia salon', 'ganancia admin']

    //     return headerElement.map((key, index) => {
    //         return <th key={index}>{key.toUpperCase()}</th>
    //     })
    // }

    const renderBody = () => {
        return report.map(({ id, employee_name, service_total, gains_employee, gains_salon, gains_admin }) => {
            return (
                <div className="tarjeta-reportes">
                    <h6>numero de reporte: {id}</h6>
                    <h3>Nombre de empleado: </h3>
                    <h4>{employee_name}</h4>
                    <h5>total ganancia semanal: {service_total}</h5>
                    <h5>ganancia para empleado: {gains_employee}</h5>
                    <h5>ganancia para el salon:  {gains_salon} </h5>
                    <h5>ganancias para dueño: {gains_admin}</h5>
                    <button className='button' onClick={() => removeData(id)}>Delete</button>
                </div>





            )
        })
    }

    return (
        <>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Ver Reportes</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                </div>
            </div>
            <div className="reports-container">

                {renderBody()}

            </div>
        </>
    )
}


export default SeeReports