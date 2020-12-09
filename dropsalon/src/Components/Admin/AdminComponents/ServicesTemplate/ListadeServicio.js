import React, {useState,useEffect}  from 'react';
import axios from 'axios';
// import {StyleSheet, Text, View, TextInput, Button, FlatList} from 'react';
import './ListadeServicio.css'

const URL = 'http://localhost:4000/services'

const ListadeServicio = () => {
    const [services, setService] = useState([])

    useEffect(() => {
        getData()
    }, []) 

    const getData = async () => {
        const response = await axios.get(URL, { headers: { Authorization: "jwt " + sessionStorage.getItem("jwt") } })
        setService(response.data)
    }

    const removeData = (id) => { //delete data in the backend
        axios.delete(`http://localhost:4000/services/${id}`, { headers: { Authorization: "jwt " + sessionStorage.getItem("jwt") } }).then(res => {
            const del = services.filter(services => id !== services.id)
            setService(del)
            console.log(res)
        })
    }

    const renderHeader = () => {
        let headerElement = ['id', 'Servicio', 'Descripcion', 'Duracion', 'price']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
   
    const renderBody = () => {
        return services.map(({ id, service_name, service_description, duration, price }) =>
                <tr key={id}>
                    <td>{id}</td>
                    <td>{service_name}</td>
                    <td>{service_description}</td>
                    <td>{duration}</td>
                    <td>{price}</td>
                    <td className='opration'>
                        <button className='button' onClick={() => removeData(id)}>Delete</button>
                    </td>
                </tr>
            )
    }

    return (
        <div className="TableServices">
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


 export default ListadeServicio
