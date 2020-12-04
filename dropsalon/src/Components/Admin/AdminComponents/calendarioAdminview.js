import React, {useState,useEffect} from 'react'
import axios from 'axios';

const URL = 'http://localhost:4000/citas'

const CalendarioAdminView = () => {
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
          
            <h2>Calendario Empleados</h2>
            <div className="Calendars-Container">
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


export default CalendarioAdminView