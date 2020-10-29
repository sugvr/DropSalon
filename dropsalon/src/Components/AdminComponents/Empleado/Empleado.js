import React from 'react'
import './Empleado.css'

function Empleado2(props) {
    return (
        <div className="Tarjetas3">
            <div>
                <img src={props.image} className="photo2" alt="Foto de empleado" />
            </div>
            <div>
                <h2 className="name2">{props.name}</h2>
            </div>
        </div>
    )
}

export default Empleado2;