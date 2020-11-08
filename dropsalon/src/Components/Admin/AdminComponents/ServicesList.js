import React from 'react'
import ListadeServicio from './ServicesTemplate/ListadeServicio'
import './ServicesList.css'
function ServicesList(){
    return(
        <div className = "ServicesSpace">
         <div className="Services-title">
                <div className="ServicesTitle">
                    <h3>Servicios</h3>
                </div>
                <div>
                    <button>Editar</button>
                </div>
            </div>
            <div>
            <ListadeServicio servicio="Servicio" Precio="Precio" Duracion="Duracion"/>
            </div>
        
        </div>
    )
}

export default ServicesList