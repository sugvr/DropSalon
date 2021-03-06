import React, {useState,useEffect} from 'react'
import axios from 'axios';

const URL = 'http://localhost:4000/citas'

const DashboardContent = () => {
    const [cita, setCita] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

        const response = await axios.get(URL)
        setCita(response.data)
    }

    const removeData = (id) => {

        axios.delete(`${URL}/${id}`).then(res => {
            const del = cita.filter(cita => id !== cita.id)
            setCita(del)
        })
    }

    const renderHeader = () => {
        let headerElement = ['id', 'Fecha', 'Comentarios', 'Usuario ID', 'Empleado ID', 'Tipo de Servicio']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return cita.map(({ id, date_rsvp, comments, user_FK, employee_FK, serviceType }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{date_rsvp}</td>
                    <td>{comments}</td>
                    <td>{user_FK}</td>
                    <td>{employee_FK}</td>
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
                <h1 class="h2">Dashboard</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group mr-2">
                        <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                </div>
            </div>
            <h2>Citas</h2>
            <div class="table-responsive">
                <table class="table table-striped table-sm">
                    <thead>
                    <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>
                        <tr>
                        {renderBody()}
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DashboardContent;