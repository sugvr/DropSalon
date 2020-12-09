import React, { useState, useEffect } from 'react'
import axios from 'axios';

const URL = 'http://localhost:4000/citas'

const DashboardContent = () => {
    const [cita, setCita] = useState([])
    
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await axios.get(URL, { headers: { Authorization: "jwt " + sessionStorage.getItem("jwt") } })
        setCita(response.data)
    }
    const removeData = (id) => {

        axios.delete(`http://localhost:4000/citas/${id}`, { headers: { Authorization: "jwt " + sessionStorage.getItem("jwt") } }).then(res => {
            const del = cita.filter(cita => id !== cita.id)
            setCita(del)
            console.log(res)
        })
    }

    const renderHeader = () => {
        let headerElement = ['id', 'Fecha', 'Comentarios', 'Nombre de cliente', 'Nombre de empleado', 'Servicio']
        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }


    const renderBody = () => {
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

    return (
        <>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Inicio </h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                </div>
            </div>

            <h2>Citas</h2>
            <div class="table-responsive">
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

export default DashboardContent;