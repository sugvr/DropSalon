import React from 'react'
import './ListadeServicio.css'

function ListadeServicio(props) {
    return (
        <div className="TableServices">
            <div>
                <h2 className="Servicio">{props.servicio}</h2>
            </div>
            <div>
                <h2 className="Precio">{props.Precio}</h2>
            </div>
            <div>
                <h2 className="Duracion">{props.Duracion}</h2>
            </div>
        </div>
    )
}

export default ListadeServicio