import React, {useState,useEffect}  from 'react';
import axios from 'axios';
import './Agenda.css'

const URL = 'http://localhost:4000/citas'


const Agenda = () => {
  const [citas, setCitas] = useState([])


  useEffect(() => {
    getData()
  }, [])


  const getData = async () => {
    const response = await axios.get(URL, { headers: { Authorization: "jwt " + sessionStorage.getItem("jwt") } })
    setCitas(response.data)
  }
  const renderHeader = () => {
    let headerElement = ['id', 'Fecha', 'Nombre de Cliente', 'comentarios', 'Servicio']

    return headerElement.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
    })
}


  const renderBody = () => {
    return citas.map(({ id, date_rsvp, user_name, comments, serviceType }) =>
            <tr key={id}>
                <td>{id}</td>
                <td>{date_rsvp}</td>
                <td>{user_name}</td>
                <td>{comments}</td>
                <td>{serviceType}</td>
            </tr>
        )
}
    return (
        <div className="TableServices">
            <h2 className = "cl_plan">Plan de trabajo</h2>
        <table class="table table-striped table-sm">
            <thead>
                <tr>{renderHeader()}</tr>
            </thead>
            <tbody>
                {renderBody()}
            </tbody>
        </table>
    </div>
    )
}

export default Agenda