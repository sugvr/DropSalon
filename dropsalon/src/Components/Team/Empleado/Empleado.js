import React from 'react'
import './Empleado.css'

function Empleado(props) {
    return (
        <div className="Tarjetas">
            <br></br>
            <img src={props.image} className="photo" alt="Foto de empleado" />
            <h2>{props.name}</h2>
            <h5>{props.job}</h5>
            <ul>
                <li>{props.li1}</li>
                <li>{props.li2} </li>
                <li>{props.li3} </li>
                
            </ul>
            <p>{props.desc}</p>
        </div>
    )
}

export default Empleado;