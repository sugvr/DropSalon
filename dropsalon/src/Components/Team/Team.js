import React from 'react'
import './Team.css'

import Empleado from './Empleado/Empleado'

import fotoEmpleado from "../../Assets/chrystal.jpg"

function Team (){
    return (
        <div>
            <h1>Nuestro Equipo</h1>
            <br />
            <br />
            <div className = "Container">
            <Empleado image={fotoEmpleado} name="Chrystal Borrero" job="Dueña / profesional" desc="iubdsvbpbfivubvsd;k" />
            <Empleado image={fotoEmpleado} name="Chrystal Borrero" job="Dueña / profesional" desc="iubdsvbpbfivubvsd;k" />
            <Empleado image={fotoEmpleado} name="Chrystal Borrero" job="Dueña / profesional" desc="iubdsvbpbfivubvsd;k" />
            <Empleado image={fotoEmpleado} name="Chrystal Borrero" job="Dueña / profesional" desc="iubdsvbpbfivubvsd;k" />
           
            </div>
           

                     
         </div>
               
    );
}

export default Team;