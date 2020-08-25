import React from 'react'
import './Empleado.css'

function Empleado(props){
    return (
        <div className="Tarjetas">
            <img src={props.image} className="photo" alt="Foto de empleado"/>
            <h2>{props.name}</h2>
            <h5>{props.job}</h5>
            <p>{props.desc}</p>
        </div>
    )
}

export default Empleado;