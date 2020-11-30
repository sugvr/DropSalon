import React, { useState } from 'react'
import ListadeServicio from './ServicesTemplate/ListadeServicio'
import './ServicesList.css'
import axios from 'axios'

const ServicesList = (props) => {
    const [valueService, setValueService] = useState('')
    const [ValueDescr, setValueDescr] = useState('')
    const [valueDuration, setValueDuration] = useState('')
    const [valuePrice, setValuePrice] = useState('')


    function handleChangeService(e) {
        setValueService(e.target.value)
    }

    function handleChangeDescr(e) {
        setValueDescr(e.target.value)
    }
    function handleChangeDuration(e) {
        setValueDuration(e.target.value)
    }

    function handleChangePrice(e) {
        setValuePrice(e.target.value)
    }

    function handleSubmit(e) {
        alert('A service was submitted: ' + this.state.value);
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:4000/services',
            data: {
                service_name: valueService,
                service_description: ValueDescr,
                duration: valueDuration,
                price: valuePrice,

            }
        })
    }
    return (
        <div className="ServicesSpace">
            <div className="Services-title">
                <div className="ServicesTitle">
                    <h3>Servicios</h3>
                </div>
                <div>
                    <button>Editar</button>
                </div>
            </div>
            <ListadeServicio/>
            <div>
              
            </div>
         
            <form className="servicePost-containt" onSubmit={handleSubmit}>
            <h1>Añadir servicio</h1>
                <label className="labels">
                    Servicio
        <input name="valueService" type="name" placeholder="Nombre" onChange={handleChangeService} />
                </label>
                <label className="labels">
                    Descripcion
        <input name="valueDescr" type="name" placeholder="Nombre" onChange={handleChangeDescr} />
                </label>
                <label className="labels">
                    Precio
        <input name="valueDuration" type="Lastname" placeholder="Apellido" onChange={handleChangeDuration} />
                </label>
                <label className="labels">
                    Duracion
        <input name="valuePrice" type="number" placeholder="Email" onChange={handleChangePrice} />
                </label>

                <button className="submit-service" type="submit">Añadir servicio</button>
            </form>

        
        </div>
    )
}



export default ServicesList 